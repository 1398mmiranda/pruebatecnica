
let Hora = class {

    static #hora;
    static #minuto;
    static #segundo;

    constructor(hora = 0, minuto = 0, segundo = 0) {
        Hora.#hora = hora <= 24 ? hora : 0;
        Hora.#minuto = minuto <= 59 ? minuto : 0;
        Hora.#segundo = segundo <= 59 ? segundo : 0;
    }

    get getHora() { return Hora.#hora; }
    get getMinuto() { return Hora.#minuto; }
    get getSegundo() { return Hora.#segundo; }

    set setHoras(hora) { Hora.#hora = hora <= 24 ? hora : 0; }
    set setMinutos(minuto) { Hora.#minuto = minuto <= 59 ? minuto : 0; }
    set setSegundos(segundo) { Hora.#segundo =  segundo <= 59 ? segundo : 0; }

    setHora(hora, minuto, segundo) { 
        Hora.#hora = hora;
        Hora.#minuto = minuto;
        Hora.#segundo =  segundo;
    }

    imprimirHora() { 
        return `${Hora.#hora}:${Hora.#minuto}:${Hora.#segundo}`
    }
}
function main() {
    let hora = new Hora(15,36,25);
    /** Obtener hora, minutos y segundos por separado */
    console.log("Hora completa:", hora.imprimirHora());
    console.log("Solo horas:", hora.getHora);
    console.log("Solo minutos:", hora.getMinuto);
    console.log("Solo holo segundos:", hora.getSegundo, "\n");

    /** settear nueva hora, minutos y segundos */

    console.log("Nueva hora: 18" );
    hora.setHoras = 18;
    console.log("Hora actualizada con set hora:", hora.imprimirHora());
    console.log("Nuevo minuto: 25" );
    hora.setMinutos = 25;
    console.log("Hora actualizada con set minuto:", hora.imprimirHora());
    console.log("Nueva segundo: 14" );
    hora.setSegundos = 14;
    console.log("Hora actualizada con set segundo:", hora.imprimirHora(), "\n");

    /** Hora actualizada con setters */
    console.log("Hora completa actualizada con setters:", hora.imprimirHora(), "\n");

    /** Actualizando hora completa */
    hora.setHora(16, 33, 02);
    console.log("Hora actualizada completa", hora.imprimirHora()); 
}

main();