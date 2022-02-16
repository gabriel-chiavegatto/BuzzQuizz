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
