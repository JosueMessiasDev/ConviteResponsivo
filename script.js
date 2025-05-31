function closeAll() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("map-popup").style.display = "none";
  document.getElementById("gift-popup").style.display = "none";
}

function confirmarPresenca() {
  window.open("https://wa.me/SEUNUMEROAQUI", "_blank");
}

function mostrarMapa() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("map-popup").style.display = "block";
}

function mostrarPresente() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("gift-popup").style.display = "block";
}
