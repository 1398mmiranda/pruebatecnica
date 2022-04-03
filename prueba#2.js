class Libros {
    constructor(titulo, autor, numerodepagina, calificacion ){
           this._titulo = titulo;
           this._autor = autor;
           this._numerodepagina = numerodepagina;
           this._calificacion = calificacion;

    }
    
    informar(){
        return `mi titulo es  ${this._titulo} y mi autor es ${this._autor} mis paginas son en total ${this._numerodepagina} mi calificacion es ${this._calificacion}`; 
    }

    get titulo(){
        return this._titulo;
    }
    set titulo(nuevotitulo){
        this._titulo = nuevotitulo;
    }
    get autor(){
        return this._autor;
    }
    set autor(nuevoautor){
        this._autor = nuevoautor;
    }
    get numerodepagina(){
        return this._numerodepagina;
    }
    set numerodepagina(nuevonumerodepagina){
        this._numerodepagina = nuevonumerodepagina;
    }
    get calificacion(){
        return this._calificacion;
    }
    set calificacion(nuevacalificacion){
        this._calificacion = nuevacalificacion;
    }
}

class ConjuntoLibros {

    static #libroArray = [];

    constructor(libroArray = []){
        ConjuntoLibros.#libroArray = libroArray;
    }

    eliminarLibroPorTitulo(titulo) {
        let posicion = ConjuntoLibros.#libroArray.map(function(e) { return e.titulo; }).indexOf(titulo);
        ConjuntoLibros.#libroArray.splice(posicion, 1);
    }

    anadirLibro(libro){
        let encontro = ConjuntoLibros.#libroArray.map(function(e) { return e.titulo; }) === libro.titulo;
        console.log("Encontro la posicion:", encontro);
        if (encontro == false) {
            ConjuntoLibros.#libroArray.push(libro);
        }
    }

    mostrarMayorCalificacion() {
        let shortedArray = ConjuntoLibros.#libroArray.sort( function(a, b) {
            if (a.calificacion > b.calificacion) {
              return -1;
            }
            if (a.calificacion < b.calificacion) {
              return 1;
            }
            return 0;
          });
        return shortedArray[0];
    }

    mostrarMenorCalificacion() {
        let shortedArray = ConjuntoLibros.#libroArray.sort( (a, b) =>  a.calificacion - b.calificacion);
        return shortedArray[0];
    }

    mostrarTodo() {
        return ConjuntoLibros.#libroArray;
    }
}

let catalogoArray = [];

let objetolibros = new Libros ("el brujo" , "sebas " , 50  ,  5 );
let objtolibros = new Libros ("el sapo" , "juan " , 100  ,  7 );
let objetlibros = new Libros ("cien años de soledad" , "gabriel garcia " , 1000  ,  10 );
let objelibros = new Libros ("el amor en los tiempos de colera" , "garcia marquez " , 700  ,  4 );


catalogoArray.push(objetolibros)
catalogoArray.push(objtolibros)
catalogoArray.push(objetlibros)
catalogoArray.push(objelibros)

let conjuntoDeLibros = new ConjuntoLibros(catalogoArray);

let arrayConjunto = conjuntoDeLibros.mostrarTodo();
console.log("Libros existentes:");
for (const libros of arrayConjunto) {
    console.log(libros.titulo);
}


console.log("Borrar libro el sapo");
conjuntoDeLibros.eliminarLibroPorTitulo("el sapo");
let arrayConjuntoNuevo = conjuntoDeLibros.mostrarTodo();
console.log("Libros existentes:");
for (const libros of arrayConjuntoNuevo) {
    console.log(libros.titulo);
}

let libromayor = conjuntoDeLibros.mostrarMayorCalificacion();
console.log("Libro mayor", libromayor);

let libroMenor = conjuntoDeLibros.mostrarMenorCalificacion();
console.log("Libro menor", libroMenor);

const nuevoLibro = new Libros("Nombre de prueba", "yo", 50, 8);
conjuntoDeLibros.anadirLibro(nuevoLibro);

let arrayConjuntoNuevo2 = conjuntoDeLibros.mostrarTodo();
console.log("Libros existentes:");

for (const libros of arrayConjuntoNuevo2) {
    console.log(libros.titulo);
}


const nuevoLibro1 = new Libros("Nombre de libro", "yo", 50, 8);

conjuntoDeLibros.anadirLibro(nuevoLibro);

let arrayConjuntoNuevo3 = conjuntoDeLibros.mostrarTodo();
console.log("Libros existentes:");

for (const libros of arrayConjuntoNuevo2) {
    console.log(libros.titulo);
}


