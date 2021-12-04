// Piedra, papel , tijeras

var jugador, maquina;

function juego(jugador, maquina) {
    if (jugador == "piedra" && maquina == "papel") {
        console.log("Has perdino!");

    }else if (jugador == "piedra" && maquina == "tijeras"){
        console.log("Has ganado!");

    }else if (jugador == "piedra" && maquina == "piedra"){
        console.log("Empate!");

    }else if (jugador == "papel" && maquina == "tijeras"){
        console.log("Has perdino!");

    }else if (jugador == "papel" && maquina == "piedra"){
        console.log("Has ganado!");

    }else if (jugador == "papel" && maquina == "papel"){
        console.log("Empate!");

    }else if (jugador == "tijeras" && maquina == "piedra"){
        console.log("Has perdino!");

    }else if (jugador == "tijeras" && maquina == "papel"){
        console.log("Has ganado!");

    }else if (jugador == "tijeras" && maquina == "tijeras"){
        console.log("Empate!");
    }
}

