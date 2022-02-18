function getQntPerguntas(){
    const qntdPerguntasQuizz = document.querySelector('.qtdperguntas-quizz').value;
    return qntdPerguntasQuizz; 
}

function gerarPerguntas(qntdPerguntasQuizz){
    let perguntas = ""
    for (let i = 0; i < qntdPerguntasQuizz; i++) {
        perguntas += `
        <div class="perguntas">
        <h1>Pergunta 1</h1>
        <input
          class="input-style"
          type="text"
          placeholder="Texto da Pergunta"
        />
        <input
          class="input-style"
          type="text"
          placeholder="Cor de fundo da Pergunta"
        />
      </div>
      <div class="resposta-correta">
        <h1>Resposta Correta</h1>
        <input class="input-style" type="text" placeholder="Resposta Correta" />
        <input class="input-style" type="text" placeholder="URL da imagem" />
      </div>
      <div class="resposta-incorreta">
        <h1>Respostas Incorretas</h1>
        <input
          class="input-style marg"
          type="text"
          placeholder="Resposta Incorreta 1"
        />
        <input class="input-style" type="text" placeholder="URL da imagem 1" />
      </div>
      <div class="resposta-incorreta">
        <input
          class="input-style marg"
          type="text"
          placeholder="Resposta Incorreta 2"
        />
        <input class="input-style" type="text" placeholder="URL da imagem 2" />
      </div>
      <div class="resposta-incorreta">
        <input
          class="input-style marg"
          type="text"
          placeholder="Resposta Incorreta 3"
        />
        <input class="input-style" type="text" placeholder="URL da imagem 3" />
      </div>
          `;
      }

      let container32 = document.getElementById("question-box");
      container32.innerHTML = perguntas;
}


function prosseguirCriarNiveis(){
    const esconderTela32 = document.querySelector(".tela3-2");
    const abrirTela33 = document.querySelector(".tela3-3");
    esconderTela32.classList.add("escondido");
    abrirTela33.classList.remove("escondido");

    const qntdNiveisQuizz = getQntNiveis();
}