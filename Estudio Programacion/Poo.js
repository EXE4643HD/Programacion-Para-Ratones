//Objeto simple
console.log("Objeto simple");
let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};
console.log(persona.nombre); // Accediendo a la propiedad nombre
persona.saludar(); // Llamada al método del objeto

//Clase y Objeto
console.log("Clase y Objeto");
class Persona {
constructor (nombre, edad) {
this.nombre = nombre;
this.edad = edad;
}
saludar() {
console.log(`Hola, me llamo ${this.nombre}`);
}
}

let p1 = new Persona("Ana", 25);
p1.saludar(); // Llamada al método del objeto p1

//Propiedades y Métodos
console.log("Propiedades y Métodos");
class Coche {
    constructor (marca, modelo) {
      this.marca = marca; // propiedad
      this.modelo = modelo; // propiedad
      this.encendido = false; // estado inicial
}

arrancar() {  // método
    this.encendido = true;
    console.log("El coche está arrancando...");
}

obtenerInfo() {  // método
  return `${this.marca} ${this.modelo}`;
}
}

//Destructuración de Objetos
console.log("Destructuración de Objetos");
let personaa = {nombrePersona: "Carlos", edadPersona: 28, ciudadPersona: "Madrid"};
let {nombrePersona, edadPersona, ciudadPersona} = personaa;

console.log(nombrePersona); // Carlos
console.log(edadPersona); // 28
console.log(ciudadPersona); // Madrid

//Destructuración de Arrays
console.log("Destructuración de Arrays");
let numeross = [1, 2, 3, 4, 5];
let [primero, segundo, ...resto] = numeross;

console.log(primero); // 1
console.log(segundo); // 2
console.log(resto); // [3, 4, 5]

//Operador Spread con Arrays
console.log("Operador Spread con Arrays");
let array1 = [1, 2, 3];
let array2 = [...array1, 4, 5];
console.log(array2); // [1, 2, 3, 4, 5]

//Operador Spread con Objetos
console.log("Operador Spread con Objetos");
let objeto1 = { nombreE: "Exequiel" };
let objeto2 = { ...objeto1, edadE: 24 };
console.log(objeto2); // { nombreE: "Exequiel", edadE: 24 }

//Operador Rest Parametros
console.log("Operador Rest Parametros");
function sumarr(...numeros) {
    return numeros.reduce((a, b) => a + b, 0);
}
console.log(sumarr(1, 2, 3, 4)); // 10
console.log(sumarr(5, 10)); // 15

//Operador Rest con Destructuración
console.log("Operador Rest con Destructuración");
let [primeroo, segundoo, ...restoo] = [10, 20, 30, 40, 50];
console.log(primeroo); // 10
console.log(segundoo); // 20
console.log(restoo); // [30, 40, 50]    
