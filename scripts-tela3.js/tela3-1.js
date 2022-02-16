function capturarQuizzValues(){
    const tituloQuizz = document.querySelector('titulo-quizz'). value;
    const urlQuizz = document.querySelector('url-quizz'). value;
    const qntdPerguntasQuizz = document.querySelector('qtdperguntas-quizz'). value;
    const qntdNiveisQuizz = document.querySelector('qtdniveisquizz'). value;
}

function prosseguirCriarPerguntas(){
    const esconderTela31 = document.querySelector(".tela3-1");
    const abrirTela32 = document.querySelector(".tela3-2");
    esconderTela31.classList.add("escondido");
    abrirTela32.classList.remove("escondido");
}