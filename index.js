const board = document.getElementById("board");
const linea1 = document.getElementById("linea1");
const linea2 = document.getElementById("linea2");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const piedra = document.getElementById("piedra");
const main = document.getElementById("main");
const rules = document.getElementById("rules")
const cerrar = document.getElementById("close")
const modal = document.querySelectorAll(".modal")[0];
const modalCont = document.querySelectorAll(".modal-cont")[0];
papel.setAttribute("valor", "1");
tijera.setAttribute("valor", "2");
piedra.setAttribute("valor", "3");
let playAgain;


/*a prueba

function responsive() {
  window.addEventListener("resize", () => {
    if (innerWidth > 610) {
      linea1.classList.remove("linea1");
      linea1.classList.add("mq630");
      cont1.classList.add("grid1");
      cont2.classList.add("grid3");
      carteles.classList.add("grid2");
    } else {
      linea1.classList.remove("mq630");
      linea1.classList.add("linea1");
      cont1.classList.remove("grid1");
      cont2.classList.remove("grid3");
      carteles.classList.remove("grid2");
    }
  })
}

*/





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
  descrip1.setAttribute("id", "descrip1");
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
  }, 0500);
  setTimeout(function insertar() {
    if (ficha.firstChild == machineChoice) {
      const clon = machineChoice.cloneNode(true);
      div.insertBefore(clon, desc2);
    } else {
      div.insertBefore(machineChoice, desc2);
    }
  }, 0505);
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
  return resultado;
}

function mostrarGanador(result) {
  const score = document.getElementById("score");
  const div = document.getElementById("cont1");
  const ficha = document.getElementById("cont2");
  const cartel = document.createElement("p");
  const cartel2 = document.createElement("p");
  const descrip1 = document.getElementById("descrip1");
  const descrip2 = document.getElementById("desc2");
  const carteles = document.createElement("div");
  const header = document.getElementById("header");
  cartel.classList.add("cartel");
  cartel2.classList.add("cartel2");
  cartel2.textContent = "PLAY AGAIN";
  cartel2.setAttribute("id", "cartel2");
  cartel.setAttribute("id", "cartel");
  carteles.setAttribute("id", "carteles");
  playAgain = cartel2;

  setTimeout(function fijarcartel() {
    if (result == "ganaste") {
      cartel.textContent = "YOU WIN";
      score.textContent = (parseInt(score.textContent) + 1);
      div.classList.add("div-container2");
      const sombraGan = document.createElement("div");
      sombraGan.appendChild(div.firstChild);
      div.insertBefore(sombraGan, descrip1);
      sombraGan.classList.add("ganador");
      ficha.classList.add("ganador-alin");
      header.classList.remove("reinicia-header");
      header.classList.add("ganador-corrector");

    }

    if (result == "perdiste") {
      cartel.textContent = "YOU LOSE";
      div.classList.add("div-container2");
      const sombraGan = document.createElement("div");
      sombraGan.appendChild(ficha.firstChild);
      ficha.insertBefore(sombraGan, descrip2);
      sombraGan.classList.add("ganador");
      div.classList.add("ganador-alin");
      header.classList.remove("reinicia-header");
      header.classList.add("ganador-corrector");

    }

    if (result == "empate") {
      cartel.textContent = "DRAW";
      div.classList.add("div-container2");
    }

    ficha.classList.add("div-container2");
    carteles.appendChild(cartel);
    carteles.appendChild(cartel2);
    linea1.appendChild(carteles);
  }, 0505);
}

function limpiarTablero() {
  main.setAttribute("class", "main");
  linea1.removeChild(cont1);
  linea1.removeChild(cont2);
  linea1.removeChild(carteles);
  linea1.appendChild(papel);
  linea1.appendChild(tijera);
  linea2.appendChild(piedra);
  board.appendChild(linea2);
  header.classList.remove("ganador-corrector");
  header.classList.add("reinicia-header");
}



rules.addEventListener("click", (e)=> {
  e.preventDefault();
  modalCont.style.visibility = "visible";
  modal.classList.toggle("modal-close");
})

cerrar.addEventListener("click", (e)=>{
  e.preventDefault();
  modal.classList.toggle("modal-close");
  setTimeout(function(){  
    modalCont.style.visibility = "hidden";}, 500);
});





papel.addEventListener("click", (e) => {
  mostrarEleccion(papel);
  const machineChoice = generarEleccionPc();
  mostrarRandom(machineChoice);
  const result = quienGana(papel, machineChoice);
  mostrarGanador(result);
  playAgain.addEventListener("click", (e) => {
    limpiarTablero();
  })
});

tijera.addEventListener("click", (e) => {
  mostrarEleccion(tijera);
  const machineChoice = generarEleccionPc();
  mostrarRandom(machineChoice);
  const result = quienGana(tijera, machineChoice);
  mostrarGanador(result);
  playAgain.addEventListener("click", (e) => {
    limpiarTablero();
  })
});

piedra.addEventListener("click", (e) => {
  mostrarEleccion(piedra);
  const machineChoice = generarEleccionPc();
  mostrarRandom(machineChoice);
  const result = quienGana(piedra, machineChoice);
  mostrarGanador(result);
  playAgain.addEventListener("click", (e) => {
    limpiarTablero();
  })
});


