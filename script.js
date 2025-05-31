function mostrarMapa() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("balao-mapa").style.display = "block";
}

function mostrarPresente() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("balao-presente").style.display = "block";
}

function fecharBalao() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("balao-mapa").style.display = "none";
  document.getElementById("balao-presente").style.display = "none";
}
