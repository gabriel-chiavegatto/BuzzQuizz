function getQntNiveis(){
    const qntdNiveisQuizz = document.querySelector('.qtdniveis-quizz').value;
    return qntdNiveisQuizz; 
}

function gerarNiveis(qntdNiveisQuizz){
    let niveis = ""
    for (let i = 0; i < qntdNiveisQuizz; i++) {
        niveis += `
        <div class="perguntas">
        <h1>Nível 1</h1>
        <input class="input-style" type="text" placeholder="Título do Nível" />
        <input
          class="input-style"
          type="text"
          placeholder="% de acerto mínima"
        />
        <input
          class="input-style"
          type="text"
          placeholder="URL da imagem do nível"
        />
        <textarea class="textarea" placeholder="Descrição do Nível"> </textarea>
      </div>
          `;
      }
      
      let container33 = document.getElementById("level-box");
      container33.innerHTML = niveis;
}

function finalizarQuizz(){
    const esconderTela33 = document.querySelector(".tela3-3");
    const abrirTela34 = document.querySelector(".tela3-4");
    esconderTela33.classList.add("escondido");
    abrirTela34.classList.remove("escondido");
}