const board = document.getElementById("board");
const linea1 = document.getElementById("linea1");
const linea2 = document.getElementById("linea2");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const piedra = document.getElementById("piedra");
const main = document.getElementById("main");
papel.setAttribute("valor", "1");
tijera.setAttribute("valor", "2");
piedra.setAttribute("valor", "3");

function mostrarEleccion(id) {
  board.removeChild(linea2);
  linea1.removeChild(papel);
  linea1.removeChild(tijera);
  const pyerChoiceContainer = document.createElement("div");
  const pcChoiceContainer = document.createElement("div");
  pyerChoiceContainer.setAttribute("id", "cont1");
  pcChoiceContainer.setAttribute("id", "cont2");
  pyerChoiceContainer.classList.add("div-container");
  pcChoiceContainer.classList.add("div-container");
  const descrip1 = document.createElement("p");
  const descrip2 = document.createElement("p");
  const pcChoice = document.createElement("div");
  pcChoice.setAttribute("id", "pc");
  pcChoice.classList.add("ficha", "uknownChoice");
  descrip1.classList.add("choice");
  descrip2.classList.add("choice");
  descrip1.textContent = "YOU PICKED";
  descrip2.textContent = "THE HOUSE PICKED";
  descrip2.setAttribute("id", "desc2");
  pyerChoiceContainer.appendChild(id);
  pyerChoiceContainer.appendChild(descrip1);
  pcChoiceContainer.appendChild(pcChoice);
  pcChoiceContainer.appendChild(descrip2);
  linea1.appendChild(pyerChoiceContainer);
  linea1.appendChild(pcChoiceContainer);
  main.setAttribute("class", "main-sin-triangulo");
}

function generarEleccionPc() {
  const random = Math.ceil(Math.random() * 3);
  let choice;
  if (random == papel.getAttribute("valor")) {
    choice = papel;
  } else {
    if (random == tijera.getAttribute("valor")) {
      choice = tijera;
    } else {
      if (random == piedra.getAttribute("valor")) {
        choice = piedra;
      }
    }
  }
  return choice;
}

function mostrarRandom(machineChoice) {
  const div = document.getElementById("cont2");
  const eliminado = document.getElementById("pc");
  const desc2 = document.getElementById("desc2");
  const ficha = document.getElementById("cont1");
  setTimeout(function eliminar() {
    div.removeChild(eliminado);
  }, 0900);
  setTimeout(function insertar() {
    if (ficha.firstChild == machineChoice) {
      const clon = machineChoice.cloneNode(true);
      div.insertBefore(clon, desc2);
    } else {
      div.insertBefore(machineChoice, desc2);
    }
  }, 0905);
}

function quienGana(id, machineChoice) {
  let resultado;
  if (id == machineChoice) {
    resultado = "empate";
  }
  if (
    (id.getAttribute("id") == "piedra" &&
      machineChoice.getAttribute("id") == "tijera") ||
    (id.getAttribute("id") == "tijera" &&
      machineChoice.getAttribute("id") == "papel") ||
    (id.getAttribute("id") == "papel" &&
      machineChoice.getAttribute("id") == "piedra")
  ) {
    resultado = "ganaste";
  }
  if (
    (id.getAttribute("id") == "tijera" &&
      machineChoice.getAttribute("id") == "piedra") ||
    (id.getAttribute("id") == "papel" &&
      machineChoice.getAttribute("id") == "tijera") ||
    (id.getAttribute("id") == "piedra" &&
      machineChoice.getAttribute("id") == "papel")
  ) {
    resultado = "perdiste";
  }
  console.log(resultado);
}

papel.addEventListener("click", (e) => {
  mostrarEleccion(papel);
  const machineChoice = generarEleccionPc();
  mostrarRandom(machineChoice);
  quienGana(papel, machineChoice);
});

tijera.addEventListener("click", (e) => {
  mostrarEleccion(tijera);
  const machineChoice = generarEleccionPc();
  mostrarRandom(machineChoice);
  quienGana(tijera, machineChoice);
});
piedra.addEventListener("click", (e) => {
  mostrarEleccion(piedra);
  const machineChoice = generarEleccionPc();
  mostrarRandom(machineChoice);
  quienGana(piedra, machineChoice);
});
