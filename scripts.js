const botaoPlayPause = document.getElementById("play-pause");
const audio = document.getElementById("audio-capitulo");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");
const textoCapitulo = document.getElementById("capitulo");
const capituloMax = 10;

let tocando = false;
let capituloAtual = 1;

function tocarFaixa() {
  audio.play();
  tocando = true;
  botaoPlayPause.classList.add("tocando");
}

function pausarFaixa() {
  audio.pause();
  tocando = false;
  botaoPlayPause.classList.remove("tocando");
}

function tocarOuPausar() {
  if (tocando === true) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
}

function proximoCapitulo() {
  pausarFaixa();
  if (capituloAtual < capituloMax) {
    capituloAtual = capituloAtual + 1;
  } else {
    capituloAtual = 1;
  }
  audio.src = "/audios/" + capituloAtual + ".mp3";
  textoCapitulo.innerText = "Capitulo " + capituloAtual;
}

function voltarCapitulo() {
  pausarFaixa();
  if (capituloAtual === 1) {
    capituloAtual = 10;
  } else {
    capituloAtual = capituloAtual - 1;
  }
  audio.src = "/audios/" + capituloAtual + ".mp3";
  textoCapitulo.innerText = "Capitulo " + capituloAtual;
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoCapituloAnterior.addEventListener("click", voltarCapitulo);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
audio.addEventListener("ended", proximoCapitulo);
