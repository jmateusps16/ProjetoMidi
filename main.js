function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio') {
        document.querySelector(seletorAudio).play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido.')
    }
}

// document.querySelector('.tecla_pom').onclick = tocaSom;

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    //Template String
    const idAudio = `#som_${instrumento}`
    listaDeTeclas[i].onclick = () => tocaSom(idAudio);

    tecla.onkeydown = (evento) => {
        if(evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => tecla.classList.remove('ativa');
}
