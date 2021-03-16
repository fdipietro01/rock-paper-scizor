
const board = document.getElementById("board");
const linea1 = document.getElementById("linea1");
const linea2 = document.getElementById("linea2");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const piedra = document.getElementById("piedra");
const main = document.getElementById("main");






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
    pcChoice.setAttribute("id", "pc")
    pcChoice.classList.add("ficha", "uknownChoice");
    descrip1.classList.add("choice");
    descrip2.classList.add("choice");
    descrip1.textContent = "YOU PICKED"
    descrip2.textContent = "THE HOUSE PICKED"
    descrip2.setAttribute("id","desc2")
    pyerChoiceContainer.appendChild(id);
    pyerChoiceContainer.appendChild(descrip1);
    pcChoiceContainer.appendChild(pcChoice);
    pcChoiceContainer.appendChild(descrip2);
    linea1.appendChild(pyerChoiceContainer);
    linea1.appendChild(pcChoiceContainer);
    main.setAttribute("class", "main-sin-triangulo");
    console.log(main);
}

function generarEleccionPc() {
    papel.setAttribute("valor", "1");
    tijera.setAttribute("valor", "2");
    piedra.setAttribute("valor", "3");
    const random = Math.ceil(Math.random() * 3);
    let choice;
    if (random == papel.valor) {choice = papel}
    else {
        if (random == tijera.valor) {choice = tijera}
        else { choice = piedra}
        }
        return choice;
    }

    function mostrarRandom(choice){
        const div = document.getElementById("cont2");
        const eliminado = document.getElementById("pc");
        const desc2 = document.getElementById("desc2");
        div.removeChild(eliminado);
        setTimeout(function insertar(){div.insertBefore(choice, desc2)}, 3000); 
        }




papel.addEventListener("click", (e) => {
    console.log(e);
    const id = papel.id;
    mostrarEleccion(papel);
    const choice = generarEleccionPc();
    console.log(choice);
    mostrarRandom(choice);

});

tijera.addEventListener("click", function (e) {
    const id = tijera.id;
    mostrarEleccion(tijera);
    const choice = generarEleccionPc();
    console.log(choice);
    mostrarRandom(choice);
});
piedra.addEventListener("click", function (e) {
    const id = piedra.id;
    mostrarEleccion(piedra);
    const choice = generarEleccionPc();
    console.log(choice);
    mostrarRandom(choice);
});


