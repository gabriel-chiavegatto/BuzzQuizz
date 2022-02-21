const promessa = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
promessa.then(obterQuizzes);
promessa.catch(promessaFalhou);

let serverResponse;



function obterQuizzes(resposta) {
    const botarNaTela1 = document.querySelector(".todosQuizzes .flexQuizzes");
    // console.log(resposta);
    //rodar todos os quizzes postados

    for (let i = 0; i < resposta.data.length; i++) {

        botarNaTela1.innerHTML += ` 
        <div class="quizz postado" onclick="abrirQuizz(${i})">
            <img src="${resposta.data[i].image}" alt="capa do quizz">
            <p>${resposta.data[i].title}</p>
        </div>`
    }
    serverResponse = resposta;
}


function promessaFalhou(erro){
    console.log("Promessa Falhou, erro no servidor");
    console.log(erro.response);
}


//Criar quizz

function criarQuizz(clique){
    const esconderTela1 = document.querySelector(".tela1");
    const abrirTela31 = document.querySelector(".tela3-1");
    esconderTela1.classList.add("escondido");
    abrirTela31.classList.remove("escondido");
}


// chamar funçoes