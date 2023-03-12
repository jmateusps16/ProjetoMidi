function tocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

// document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    //Template String
    const idAudio = `#som_${instrumento}`
    listaDeTeclas[i].onclick = () => tocaSomPom(idAudio);

    tecla.onkeydown = (evento) => {
        if(evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => tecla.classList.remove('ativa');
}
