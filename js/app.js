function alterarStatus(indice){
    let escolhido = document.getElementById(`game-${indice}`);
    escolhido.children[0].classList.toggle('dashboard__item__img--rented');
    escolhido.children[2].classList.toggle('dashboard__item__button--return');
    validarAlugado(escolhido.children[2], escolhido.children[0]);
}

function validarAlugado(botao, imagem){
    if(botao.classList.contains('dashboard__item__button--return') && imagem.classList.contains('dashboard__item__img--rented')){
        alterarTexto(botao, 'Devolver')
    }else{
        alterarTexto(botao, 'Alugar')
    }
}

function alterarTexto(elemento, texto){
    elemento.innerHTML = texto;
}