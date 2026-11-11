// Activa el modo estricto para ayudar a detectar errores comunes de JavaScript.
"use strict";

// Busca el botón que el jugador debe intentar presionar.
const btn = document.getElementById("run-btn");
// Busca el contenedor dentro del cual debe moverse el botón.
const container = document.getElementById("game-container");
// Busca el elemento donde se muestra la cantidad de clics.
const scoreDisplay = document.getElementById("score");

// Guarda la cantidad de veces que se ha presionado el botón.
let clicks = 0;

// Declara la función que mueve el botón a una posición aleatoria.
function moveButton() {
  // Calcula el máximo desplazamiento horizontal sin sacar el botón del contenedor.
  const maxLeft = container.clientWidth - btn.offsetWidth;
  // Calcula el máximo desplazamiento vertical sin sacar el botón del contenedor.
  const maxTop = container.clientHeight - btn.offsetHeight;

  // Elige una posición horizontal aleatoria entre el borde izquierdo y el límite derecho.
  btn.style.left = `${Math.random() * maxLeft}px`;
  // Elige una posición vertical aleatoria entre el borde superior y el límite inferior.
  btn.style.top = `${Math.random() * maxTop}px`;
// Cierra la función que mueve el botón.
}

// Registra lo que debe ocurrir cuando se presiona el botón.
btn.addEventListener("click", () => {
  // Suma uno al contador de clics.
  clicks += 1;
  // Actualiza el texto visible con la cantidad actual de clics.
  scoreDisplay.textContent = `Clicks: ${clicks}`;
  // Mueve el botón inmediatamente después de presionarlo.
  moveButton();
// Cierra la función que responde al clic.
});

// Mueve el botón automáticamente cada 700 milisegundos.
window.setInterval(moveButton, 700);
// Vuelve a calcular su posición cuando cambia el tamaño de la ventana.
window.addEventListener("resize", moveButton);

