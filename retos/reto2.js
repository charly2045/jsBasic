
function juego(jugador, maquina) {
    switch (jugador) {
        case "piedra":
            switch (maquina) {
                case "piedra":
                    console.log("Empate!");
                    break;
                case "papel":
                    console.log("Has perdido!");
                    break;
                case "tijeras":
                    console.log("Has ganado!");
                    break;
            }
            break;
        case "papel":
            switch (maquina) {
                case "piedra":
                    console.log("Has ganado!");
                    break;
                case "papel":
                    console.log("Empate!");
                    break;
                case "tijeras":
                    console.log("Has perdido!");
                    break;
            }
            break;
        case "tijeras":
            switch (maquina) {
                case "piedra":
                    console.log("Has perdido!");
                    break;
                case "papel":
                    console.log("Has ganado!");
                    break;
                case "tijeras":
                    console.log("Empate!");
                    break;
            }
            break;
    }
}  
