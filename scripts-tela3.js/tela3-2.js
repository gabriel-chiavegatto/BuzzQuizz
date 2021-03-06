function gerarPerguntas(qntdPerguntasQuizz){
  console.log(qntdPerguntasQuizz);
    let perguntas = ""  
    for (let p = 0; p < qntdPerguntasQuizz; p++) {
        perguntas += `
        <div class="perguntas">
        <h1>Pergunta ${p+1}</h1>
        <input
          id="inputpergunta1"
          class="input-style textodapergunta"
          type="text"
          placeholder="Texto da Pergunta"
          minlength="20" required
          data-identifier="question"
        />
        <input
          id="inputpergunta2"
          class="input-style textodacor"
          type="text"
          placeholder="Cor de fundo da Pergunta"
          required
          data-identifier="question"
        />
      </div>
      <div class="resposta-correta">
        <h1>Resposta Correta</h1>
        <input id="inputpergunta3" class="input-style textodacorreta" type="text" 
        placeholder="Resposta Correta" required data-identifier="question" />
        <input id="inputpergunta4" class="input-style textodaurl" type="url" 
        placeholder="URL da imagem" required data-identifier="question" />
      </div>
      <div class="resposta-incorreta">
        <h1>Respostas Incorretas</h1>
        <input
          id="inputpergunta5"
          class="input-style marg textodaincorreta1"
          type="text"
          placeholder="Resposta Incorreta 1" required
          data-identifier="question"
        />
        <input id="inputpergunta6" class="input-style urldaincorreta1" type="url" 
        placeholder="URL da imagem 1" required data-identifier="question" />
      </div>
      <div class="resposta-incorreta">
        <input
          class="input-style marg textodaincorreta2"
          type="text"
          placeholder="Resposta Incorreta 2"
          data-identifier="question"
        />
        <input class="input-style urldaincorreta2" type="url" placeholder="URL da imagem 2" />
      </div>
      <div class="resposta-incorreta">
        <input
          class="input-style marg textodaincorreta3"
          type="text"
          placeholder="Resposta Incorreta 3"
          data-identifier="question"
        />
        <input class="input-style urldaincorreta3" type="url" placeholder="URL da imagem 3" />
      </div>
          `;
      }

      let container32 = document.getElementById("question-box");
      container32.innerHTML = perguntas;
}

//validar as perguntas
let mudarparaniveis = false;

function validarInputPergunta1(){
  let textodapergunta = document.getElementById('inputpergunta1').value;
  if(!textodapergunta || textodapergunta.length < 20){
    alert("Texto da Pergunta Inv??lido");
    mudarparaniveis = false;
}else{
    console.log("Deu certo");
    mudarparaniveis = true;
    return [textodapergunta];
}
}

//const hex = cordapergunta.match(/^#[0-9A-F]{6}$/i.test('#AABBCC'))
function validarInputPergunta2(){
  let cordapergunta = document.getElementById('inputpergunta2').value;
  const hex = cordapergunta.match(/^#[0-9A-F]{6}$/i)
  if(cordapergunta == hex){
    console.log("Deu certo");
    mudarparaniveis = true;
    return [cordapergunta];
}else{
    alert("Texto da Cor Pergunta Inv??lido");
    mudarparaniveis = false;
}
}

function validarInputPergunta3(){
  let textodaresposta = document.getElementById('inputpergunta3').value;
  if(!textodaresposta){
    alert("Texto da Resposta Inv??lido");
    mudarparaniveis = false;
}else{
    console.log("Deu certo");
    mudarparaniveis = true;
    return [textodaresposta];
}
}

//precisa ser url
function validarInputPergunta4(){
  let urldaresposta = document.getElementById('inputpergunta4').value;
  const res = urldaresposta.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  if(urldaresposta == res){
    console.log("Deu certo");
    mudarparaniveis = true;
    return [urldaresposta];
}else{
    alert("Texto da URL da Resposta Inv??lido");
    mudarparaniveis = false;
}
}

function validarInputPergunta5(){
  let textodaincorreta = document.getElementById('inputpergunta5').value;
  if(!textodaincorreta){
    alert("Texto da Resposta Incorreta Inv??lido");
    mudarparaniveis = false;
}else{
    console.log("Deu certo");
    mudarparaniveis = true;
    return [textodaincorreta];
}
}

//precisa ser url
function validarInputPergunta6(){
  let urldaincorreta = document.getElementById('inputpergunta6').value;
  const res = urldaincorreta.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  if(urldaincorreta == res){
    console.log("Deu certo");
    mudarparaniveis = true;
    return [urldaincorreta];
}else{
    alert("Texto da URL da Resposta Inv??lido");
    mudarparaniveis = false;
}
}


function validaGeral(){
  validarInputPergunta1();
  validarInputPergunta2();
  validarInputPergunta3();
  validarInputPergunta4();
  validarInputPergunta5();
  validarInputPergunta6();
}


function prosseguirCriarNiveis(){
    validaGeral();
    console.log(mudarparaniveis);
    if(mudarparaniveis == true){
    const esconderTela32 = document.querySelector(".tela3-2");
    const abrirTela33 = document.querySelector(".tela3-3");
    esconderTela32.classList.add("escondido");
    abrirTela33.classList.remove("escondido");
}else{
    mudarparaniveis = false;
    alert("Preencha todos os campos corretamente");
}

    let qntdNiveisQuizz = document.querySelector('.qtdniveis-quizz').value;
    gerarNiveis(qntdNiveisQuizz);
}