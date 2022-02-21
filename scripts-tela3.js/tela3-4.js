function gerarSucessoQuizz(tituloQuizz,urlQuizz){
    let container34 = document.getElementById("sucess-box");
    container34.innerHTML = `
    <div class="quizz postado">
      <img src=${urlQuizz} alt="capa do quizz" />
      <p>${tituloQuizz}</p>
      `
}

function acessarQuizz(resposta){
    abrirQuizz();
}

function gerarMeuQuizz(){
    let tituloQuizz = document.querySelector('.titulo-quizz').value;
    let urlQuizz = document.querySelector('.url-quizz').value;
    let containertela1 = document.getElementById("nossoquizz")
    containertela1.innerHTML = `
    <div class="quizz postado">
      <img src=${urlQuizz} alt="capa do quizz" />
      <p>${tituloQuizz}</p>
      `
      const esconderdashed = document.querySelector(".quizz");
      esconderdashed.classList.remove("seuPrimeiroQuizz");
}

function voltarParaHome(){
    gerarMeuQuizz();
    const esconderTela34 = document.querySelector(".tela3-4");
    const abrirTela1 = document.querySelector(".tela1");
    esconderTela34.classList.add("escondido");
    abrirTela1.classList.remove("escondido");
}


function armazenarDadosStorage(promisse){
    const dadosSerializados = JSON.stringify(promisse);

    localStorage.setItem("Quizz", `${dadosSerializados}`);
}
