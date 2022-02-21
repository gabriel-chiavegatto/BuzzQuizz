function gerarSucessoQuizz(tituloQuizz,urlQuizz){
    let container34 = document.getElementById("sucess-box");
    container34.innerHTML = `
    <div class="quizz postado">
      <img src=${urlQuizz} alt="capa do quizz" />
      <p>${tituloQuizz}</p>
      `
}

//function acessarQuizz(){}

function voltarParaHome(){
    const esconderTela34 = document.querySelector(".tela3-4");
    const abrirTela1 = document.querySelector(".tela1");
    esconderTela34.classList.add("escondido");
    abrirTela1.classList.remove("escondido");
}