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
}
}

function validarInputNivel2(){
  let numerodonivel = document.getElementById('inputnivel2').value;
  if(numerodonivel !=[0-100]){
    alert("Texto da Porcentagem do Nível Inválido");
    finalizarTudo = false;
}else{
    console.log("Deu certo");
    finalizarTudo = true;
}
}

//precisa ser url
function validarInputNivel3(){
  let urldonivel = document.getElementById('inputnivel3').value;
  const res = urldonivel.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  if(urldonivel == res){
    console.log("Deu certo");
    finalizarTudo = true;
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
}
}

function validaNiveis(){
  validarInputNivel1();
  validarInputNivel2();
  validarInputNivel3();
  validarInputNivel4();
}

function finalizarQuizz(){
    validaNiveis();
    console.log(finalizarTudo);
    if(finalizarTudo == true){
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
}


//https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes
/*
{
	title: "Título do quizz",
	image: "https://http.cat/411.jpg",
	questions: [
		{
			title: "Título da pergunta 1",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 2",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 3",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		}
	],
	levels: [
		{
			title: "Título do nível 1",
			image: "https://http.cat/411.jpg",
			text: "Descrição do nível 1",
			minValue: 0
		},
		{
			title: "Título do nível 2",
			image: "https://http.cat/412.jpg",
			text: "Descrição do nível 2",
			minValue: 50
		}
	]
}*/