

function abrirQuizz(clique) {
    const esconderTela1 = document.querySelector(".tela1");
    const abrirTela2 = document.querySelector(".tela2");
    esconderTela1.classList.add("escondido");
    abrirTela2.classList.remove("escondido");

    const indiceDoQuizzSelecionado = clique;
    exibirQuizzClicado(indiceDoQuizzSelecionado)
}

function exibirQuizzClicado(k) {

    const capa = document.querySelector(".tela2 .capa");
    capa.innerHTML = `
        <img src="${serverResponse.data[k].image}" alt="capa do quizz" />
        <p>${serverResponse.data[k].title}</p>
      `;

    const questoes = document.querySelector(".tela2 .questoes");

    questoes.innerHTML = null;

    for (let i = 0; i < serverResponse.data[k].questions.length; i++) {
        questoes.innerHTML += `
        <section class="questao questao${i}">
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
}

function analizarRespostas(clique) {
    const jaClicou = clique.classList.contains("ja-foi-clicada");
    const imgDaEscolhida = clique.querySelector("img");
    const textoDaEscolhida = clique.querySelector("figcaption")
    console.log(jaClicou);
    if (!jaClicou){
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
    }
}

function addJaFoiClicada(opcoes) {
    console.log(opcoes);
    opcoes.classList.add("ja-foi-clicada");
}
function embassarImgs(imgs){
    const clicada = imgs.classList.contains("clicada");
    if(!clicada){
        imgs.classList.add("embassar-imagens-onclick");
    }
}
function colorirTexto(figcaptions){
    const pai = figcaptions.parentNode;
    const seraSeAcertou = pai.classList.contains("true");
    if(seraSeAcertou){
        figcaptions.classList.add("fica-verde");
    } else {
        figcaptions.classList.add("fica-vermelho");
    }
}
