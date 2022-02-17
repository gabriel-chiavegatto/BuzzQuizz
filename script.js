const promessa = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
promessa.then(obterQuizzes);
promessa.catch(promessaFalhou);

let indiceData = [{
    idM,
    titleM,
    imageM,
    questionsM: [{
        titleM,
        colorM,
        answersM:[{
            textM,
            imageM,
            isCorrectAnswerM
        }]
    }],
    levelsM:[{
        titleM,
        imageM,
        textM,
        minValueM
    }]
}];


function obterQuizzes(resposta) {
    const botarNaTela1 = document.querySelector(".todosQuizzes .flexQuizzes");
    // console.log(resposta);
    //rodar todos os quizzes postados

    for (i = 0; i < resposta.data.length; i++) {

        botarNaTela1.innerHTML += ` 
        <div class="quizz postado" onclick="abrirQuizz(${i})">
            <img src="${resposta.data[i].image}" alt="capa do quizz">
            <p>${resposta.data[i].title}</p>
        </div>`
    }
}
    

function promessaFalhou(resposta){
    console.log("Promessa Falhou, erro no servidor");
}

function abrirQuizz(clique){
    const esconderTela1 = document.querySelector(".tela1");
    const abrirTela2 = document.querySelector(".tela2");
    esconderTela1.classList.add("escondido");
    abrirTela2.classList.remove("escondido");

}
function voltarPraHome(){
    const esconderTela2 = document.querySelector(".tela2");
    const abrirTela1 = document.querySelector(".tela1");
    esconderTela2.classList.add("escondido");
    abrirTela1.classList.remove("escondido");
}

//Criar quizz

function criarQuizz(clique){
    const esconderTela1 = document.querySelector(".tela1");
    const abrirTela31 = document.querySelector(".tela3-1");
    esconderTela1.classList.add("escondido");
    abrirTela31.classList.remove("escondido");
}


// chamar funçoes