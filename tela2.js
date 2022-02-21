let quizzAberto;
let porcentagemDeAcertos;
let seuNivel = 0;

function abrirQuizz(clique) {
    const esconderTela1 = document.querySelector(".tela1");
    const abrirTela2 = document.querySelector(".tela2");
    esconderTela1.classList.add("escondido");
    abrirTela2.classList.remove("escondido");
    // abrirTela2.querySelector(".capa").scrollIntoView();
    const indiceDoQuizzSelecionado = clique;
    exibirQuizzClicado(indiceDoQuizzSelecionado);
}
function scrollarParaProximaQuestao(){
    const questaoEmAberto = document.querySelector(".em-aberto");
    if(questaoEmAberto != null){
        questaoEmAberto.scrollIntoView();
    } else{
        document.querySelector("footer").scrollIntoView();
    }

}

function exibirQuizzClicado(k) {
    
    document.querySelector(".capa").scrollIntoView();

    const capa = document.querySelector(".tela2 .capa");
    capa.innerHTML = `
        <img src="${serverResponse.data[k].image}" alt="capa do quizz" />
        <p>${serverResponse.data[k].title}</p>
      `;

    const questoes = document.querySelector(".tela2 .questoes");

    questoes.innerHTML = null;

    for (let i = 0; i < serverResponse.data[k].questions.length; i++) {
        questoes.innerHTML += `
        <section class="questao questao${i} em-aberto">
            <div class="conteudo">
                <p class="pergunta">
                ${serverResponse.data[k].questions[i].title}
                </p> 
                    <style> .pergunta {background-color: ${serverResponse.data[k].questions[i].color};}</style>
                <div class="opcoes">
                </div>
            </div>
        </section>
         `
        for (let j = 0; j < serverResponse.data[k].questions[i].answers.length; j++) {
            const answersTo = document.querySelector(`.questao${i} .opcoes`);
            answersTo.innerHTML += `
            <figure onclick="analizarRespostas(this)" class="${serverResponse.data[k].questions[i].answers[j].isCorrectAnswer}">
                <img src="${serverResponse.data[k].questions[i].answers[j].image}" alt="imagem respostas" />
                <figcaption>${serverResponse.data[k].questions[i].answers[j].text}</figcaption>
              </figure>
            `
        }
    }
    quizzAberto = k;
}

function analizarRespostas(clique) {
    const jaClicou = clique.classList.contains("ja-foi-clicada");
    const imgDaEscolhida = clique.querySelector("img");
    const textoDaEscolhida = clique.querySelector("figcaption")
    const questaoDoClique = clique.parentNode.parentNode.parentNode;

    if (!jaClicou) {
        questaoDoClique.classList.add("questao-respondida");
        questaoDoClique.classList.remove("em-aberto");
        console.log(questaoDoClique);
        clique.classList.add("clicada");
        imgDaEscolhida.classList.add("clicada");
        textoDaEscolhida.classList.add("clicada");
        const pai = clique.parentNode;
        const opcoesRespostas = pai.querySelectorAll("figure");
        opcoesRespostas.forEach(addJaFoiClicada);
        const imgsRespostas = pai.querySelectorAll("img");
        imgsRespostas.forEach(addJaFoiClicada);
        imgsRespostas.forEach(embassarImgs);
        const textosDasRespostas = pai.querySelectorAll("figcaption");
        textosDasRespostas.forEach(colorirTexto);

        calcularDesempenho();
        verificarSeTodasForamRespondidas();
        setTimeout(scrollarParaProximaQuestao, 2000);

    }
}

function addJaFoiClicada(opcoes) {
    opcoes.classList.add("ja-foi-clicada");
}
function embassarImgs(imgs) {
    const clicada = imgs.classList.contains("clicada");
    if (!clicada) {
        imgs.classList.add("embassar-imagens-onclick");
    }
}
function colorirTexto(figcaptions) {
    const pai = figcaptions.parentNode;
    const seraSeAcertou = pai.classList.contains("true");
    if (seraSeAcertou) {
        figcaptions.classList.add("fica-verde");
    } else {
        figcaptions.classList.add("fica-vermelho");
    }
}
function calcularDesempenho() {
    const acertos = document.querySelectorAll(".clicada .fica-verde");
    porcentagemDeAcertos = parseInt(((acertos.length) / (serverResponse.data[quizzAberto].questions.length)) * 100);
    console.log(porcentagemDeAcertos);
    console.log(acertos[0]);
}

function verificarSeTodasForamRespondidas() {
    const respondidas = document.querySelectorAll(".questao-respondida");

    if (serverResponse.data[quizzAberto].questions.length == respondidas.length) {
        colocarResultadoNaTela(porcentagemDeAcertos);
    }
}
function colocarResultadoNaTela(porcentagem) {
    
    for (let i = 0; i < serverResponse.data[quizzAberto].levels.length; i++) {
        if (porcentagem >= serverResponse.data[quizzAberto].levels[i].minValue) {
            seuNivel = i;
        }
    }

    const tela = document.querySelector("footer");
    tela.innerHTML += `
            <section class="resultado">
                <div>
                <p class="porcentagemDeAcertos">${serverResponse.data[quizzAberto].levels[seuNivel].title}</p>
                <img src="${serverResponse.data[quizzAberto].levels[seuNivel].image}" alt="imagem da sua avaliação" />
                <p class="parabens">
                ${serverResponse.data[quizzAberto].levels[seuNivel].text}
                </p>
                </div>
            </section>
            <section class="reiniciaOuVolta">
                <div>
                <button class="reiniciar" onclick="reiniciarQuizz()">Reiniciar Quizz</button>
                <button class="voltar" onclick="voltarPraHome()">
                    Voltar para home
                </button>
                </div>
            </section>
        `
}

function reiniciarQuizz(){
    porcentagemDeAcertos = null;
    seuNivel = 0;
    let footer = document.querySelector("footer");
    footer.innerHTML = " ";
    exibirQuizzClicado(quizzAberto);
    
}

function voltarPraHome() {
    const esconderTela2 = document.querySelector(".tela2");
    const abrirTela1 = document.querySelector(".tela1");
    esconderTela2.classList.add("escondido");
    abrirTela1.classList.remove("escondido");
    let footer = document.querySelector("footer");
    footer.innerHTML = " ";

}

