
const board = document.getElementById("board");
const linea1 = document.getElementById("linea1");
const linea2 = document.getElementById("linea2");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const piedra =document.getElementById("piedra");
const main =document.getElementById("main");






function mostrarEleccion(id){
    board.removeChild (linea2);
    linea1.removeChild(papel);
    linea1.removeChild(tijera);
    const pyerChoiceContainer= document.createElement("div");
    const pcChoiceContainer= document.createElement("div");
    pyerChoiceContainer.classList.add("div-container");
    pcChoiceContainer.classList.add("div-container");
    const descrip1 = document.createElement("p");
    const descrip2 = document.createElement("p");
    const pcChoice= document.createElement("div");
    pcChoice.classList.add("ficha", "uknownChoice");
    descrip1.classList.add("choice");
    descrip2.classList.add("choice");
    descrip1.textContent = "YOU PICKED"
    descrip2.textContent = "THE HOUSE PICKED"
    pyerChoiceContainer.appendChild(id);
    pyerChoiceContainer.appendChild(descrip1);
    pcChoiceContainer.appendChild(pcChoice);
    pcChoiceContainer.appendChild(descrip2);
    linea1.appendChild(pyerChoiceContainer);
    linea1.appendChild(pcChoiceContainer);
    main.setAttribute("class", "main-sin-triangulo");
    console.log(main);
}




papel.addEventListener("click", (e)=>{
        console.log(e);
        const id = papel.id;
        mostrarEleccion(papel);
    });

tijera.addEventListener("click", function(e){
        const id = tijera.id;
        mostrarEleccion(tijera);
    });    
piedra.addEventListener("click", function(e){
        const id = piedra.id;
        mostrarEleccion(piedra);
    });

   