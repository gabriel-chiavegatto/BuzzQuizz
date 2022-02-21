function gerarNiveis(qntdNiveisQuizz){
    let niveis = ""
    for (let n = 0; n < qntdNiveisQuizz; n++) {
        niveis += `
        <div class="perguntas">
        <h1>Nível ${n+1}</h1>
        <input id="inputnivel1" class="input-style" type="text" placeholder="Título do Nível" minlength="10" required />
        <input
          id="inputnivel2"
          class="input-style"
          type="number"
          placeholder="% de acerto mínima" required
        />
        <input
          id="inputnivel3"
          class="input-style"
          type="url"
          placeholder="URL da imagem do nível" required
        />
        <textarea id="inputnivel4" class="textarea" placeholder="Descrição do Nível" minlength="30" required> </textarea>
      </div>
          `;
      }
      
      let container33 = document.getElementById("level-box");
      container33.innerHTML = niveis;
}

//validar input dos niveis
let finalizarTudo = false;

function validarInputNivel1(){
  let textodonivel = document.getElementById('inputnivel1').value;
  if(!textodonivel || textodonivel.length < 10){
    alert("Texto do Nível Inválido");
    finalizarTudo = false;
}else{
    console.log("Deu certo");
    finalizarTudo = true;
    return [textodonivel];
}
}

function validarInputNivel2(){
  let numerodonivel = document.getElementById('inputnivel2').value;
  if(numerodonivel >=0 || numerodonivel <=100){
    console.log("Deu certo");
    finalizarTudo = true;
    return [numerodonivel];
}else{
    alert("Texto da Porcentagem do Nível Inválido");
    finalizarTudo = false;
}
}

//precisa ser url
function validarInputNivel3(){
  let urldonivel = document.getElementById('inputnivel3').value;
  const res = urldonivel.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  if(urldonivel == res){
    console.log("Deu certo");
    finalizarTudo = true;
    return [urldonivel];
}else{
    alert("Texto da URL do Nível Inválido");
    finalizarTudo = false;
}
}

function validarInputNivel4(){
  let descricaodonivel = document.getElementById('inputnivel4').value;
  if(!descricaodonivel || descricaodonivel.length < 30){
    alert("Texto da Descrição do Nível Inválido");
    finalizarTudo = false;
}else{
    console.log("Deu certo");
    finalizarTudo = true;
    return [descricaodonivel];
}
}

function validaNiveis(){
  validarInputNivel1();
  validarInputNivel2();
  validarInputNivel3();
  validarInputNivel4();
}

function enviarParaServidor(){
    let tituloQuizz = document.querySelector('.titulo-quizz').value;
    let urlQuizz = document.querySelector('.url-quizz').value;
    let textodapergunta = document.getElementById('inputpergunta1').value; //let [textodapergunta]
    textodapergunta = [textodapergunta]
    let cordapergunta = document.getElementById('inputpergunta2').value;
    cordapergunta = [cordapergunta]
    let textodaresposta = document.getElementById('inputpergunta3').value;
    textodaresposta = [textodaresposta]
    let urldaresposta = document.getElementById('inputpergunta4').value;
    urldaresposta = [urldaresposta]
    let textodaincorreta = document.getElementById('inputpergunta5').value;
    textodaincorreta = [textodaincorreta]
    let urldaincorreta = document.getElementById('inputpergunta6').value;
    urldaincorreta = [urldaincorreta]
    let textodonivel = document.getElementById('inputnivel1').value;
    textodonivel = [textodonivel]
    let numerodonivel = document.getElementById('inputnivel2').value;
    numerodonivel = [numerodonivel]
    let urldonivel = document.getElementById('inputnivel3').value;
    urldonivel = [urldonivel]
    let descricaodonivel = document.getElementById('inputnivel4').value;
    descricaodonivel = [descricaodonivel] 

  
  const promisse = axios.post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes", 
  {
    title: `${tituloQuizz}`,
    image: `${urlQuizz}`,
    questions: [
      {
        title: `${textodapergunta[0]}`,
        color: `${cordapergunta[0]}`,
        answers: [
          {
            text: `${textodaresposta[0]}`,
            image: `${urldaresposta[0]}`,
            isCorrectAnswer: true
          },
          {
            text: `${textodaincorreta[0]}`,
            image: `${urldaincorreta[0]}`,
            isCorrectAnswer: false
          }
        ]
      },
      {
        title: `${textodapergunta[1]}`,
        color: `${cordapergunta[1]}`,
        answers: [
          {
            text: `${textodaresposta[1]}`,
            image: `${urldaresposta[1]}`,
            isCorrectAnswer: true
          },
          {
            text: `${textodaincorreta[1]}`,
            image: `${urldaincorreta[1]}`,
            isCorrectAnswer: false
          }
        ]
      },
      {
        title: `${textodapergunta[2]}`,
        color: `${cordapergunta[2]}`,
        answers: [
          {
            text: `${textodaresposta[2]}`,
            image: `${urldaresposta[2]}`,
            isCorrectAnswer: true
          },
          {
            text: `${textodaincorreta[2]}`,
            image: `${urldaincorreta[2]}`,
            isCorrectAnswer: false
          }
        ]
      }
    ],
    levels: [
      {
        title: `${textodonivel[0]}`,
        image: `${urldonivel[0]}`,
        text: `${descricaodonivel[0]}`,
        minValue: 0
      },
      {
        title: `${textodonivel[1]}`,
        image: `${urldonivel[1]}`,
        text: `${descricaodonivel[1]}`,
        minValue: 50
      }
    ]
  })
  promisse.catch(function (erro) {
    console.log(erro.response);
    console.error(erro.response);
  })
  armazenarDadosStorage(promisse);
}


function finalizarQuizz(){
    validaNiveis();
    console.log(finalizarTudo);
    if(finalizarTudo == true){
    enviarParaServidor();
    const esconderTela33 = document.querySelector(".tela3-3");
    const abrirTela34 = document.querySelector(".tela3-4");
    esconderTela33.classList.add("escondido");
    abrirTela34.classList.remove("escondido");
  }else{
    finalizarTudo = false;
    alert("Preencha todos os campos corretamente");
}
    
    let tituloQuizz = document.querySelector('.titulo-quizz').value;
    let urlQuizz = document.querySelector('.url-quizz').value;
    gerarSucessoQuizz(tituloQuizz,urlQuizz);
    armazenarDadosStorage();
}


