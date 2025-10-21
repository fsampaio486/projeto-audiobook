const botaoPlayPouse = document.getElementById("play-pouse");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");
const audio = document.getElementById("audio-capitulo");
const tituloCapitulo = document.getElementById("capitulo");

const quantidadeDeCapitulos = 10;
let tocando = false;
let capituloAtual = 1;

 function tocarFaixa() {
    audio.play();
    tocando = true;
    botaoPlayPouse.classList.add("tocando");
 }

 function pausarFaixa() {
    audio.pause()
    tocando = false;
    botaoPlayPouse.classList.remove("tocando");
 }

 function tocarOuPausar() {
    if(tocando === true) {
        pausarFaixa();
    } else {
        tocarFaixa();
    }
 }

 function proximoCapitulo() {
    pausarFaixa();

    if(capituloAtual < quantidadeDeCapitulos) {
        capituloAtual = capituloAtual + 1;
    } else {
        capituloAtual = 1;
    }

    audio.src = "./audio/" + capituloAtual + ".mp3";
    tituloCapitulo.innerText = "Capitulo " + capituloAtual;
 }

 function capituloAnterior() {
    pausarFaixa();

    if(capituloAtual === 1) {
        capituloAtual = quantidadeDeCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    audio.src = "./audio/" + capituloAtual + ".mp3";
    tituloCapitulo.innerText = "Capitulo " + capituloAtual;
 }

 botaoPlayPouse.addEventListener('click', tocarOuPausar);
 botaoProximoCapitulo.addEventListener('click', proximoCapitulo);
 botaoCapituloAnterior.addEventListener('click', capituloAnterior);