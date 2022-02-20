let mudardetela = 0;


function validarTitulo(){
    const tituloQuizz = document.querySelector('.titulo-quizz').value;
    if(!tituloQuizz || tituloQuizz.length < 20 || tituloQuizz.length > 65){
        alert("Título do Quizz Inválido");
        mudardetela = false;
    }else{
        console.log("Deu certo");
        mudardetela += 1;
        return tituloQuizz;
    }
}

function validarURL(){
    const urlQuizz = document.querySelector('.url-quizz').value;
    const res = urlQuizz.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == urlQuizz){
        console.log("Deu certo demais");
        mudardetela += 1;
        return urlQuizz;
    }else{
        alert("URL Inválida");
        mudardetela = false;
    }
}


function validarQtdPerguntas(){
    const qntdPerguntasQuizz = document.querySelector('.qtdperguntas-quizz').value;
    if(!qntdPerguntasQuizz || qntdPerguntasQuizz < 3){
        alert("Insira no mínimo 3 perguntas");
        mudardetela = false;
    }else{
        console.log("Deu mtmt certo");
        mudardetela += 1;
    }
}

function validarQtdNiveis(){
    const qntdNiveisQuizz = document.querySelector('.qtdniveis-quizz').value;
    if(!qntdNiveisQuizz || qntdNiveisQuizz < 2){
        alert("O quizz precisa de no mínimo 2 níveis");
        mudardetela = false;
    }else{
        console.log("Deu mtmtmt certo");
        mudardetela += 1;
    }
}

function prosseguirCriarPerguntas(){
    validarTitulo();
    validarURL();
    validarQtdPerguntas();
    validarQtdNiveis();
    console.log(mudardetela);
    if(mudardetela == 4){
    const esconderTela31 = document.querySelector(".tela3-1");
    const abrirTela32 = document.querySelector(".tela3-2");
    esconderTela31.classList.add("escondido");
    abrirTela32.classList.remove("escondido");
 }else{
     mudardetela = 0;
     alert("Preencha todos os campos corretamente")
 }
     let qntdPerguntasQuizz = document.querySelector('.qtdperguntas-quizz').value;
     gerarPerguntas(qntdPerguntasQuizz);
}

