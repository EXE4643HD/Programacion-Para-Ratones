//Funciones de JavaScript

//Funciones Declarativas
console.log("Funciones Declarativas");
function saludar() {
    console.log("¡Hola, mundo!");
}
saludar(); // Llamada a la función

//Otro Ejemplo de Función Declarativa
console.log("Otro Ejemplo de Función Declarativa");

console.log(calcularArea(5, 3));
console.log(calcularArea(8, 4));

function calcularArea (ancho, alto){
const area = ancho * alto;
return area;
}

//Funciones Expresadas
console.log("Funciones Expresadas");
const despedirse = function() {
    console.log("¡Adiós, mundo!");
} 
despedirse(); // Llamada a la función

const saludillo = function saludo(){
    console.log("¡Hola!");
}
saludillo(); // Llamada a la función

//Funciones Flecha
console.log("Funciones Flecha");
const sumar = (a, b) =>{
    return a + b;
}

const restar = (a, b) => a - b; // Función flecha con retorno implícito

function crearUsuario (nombre = "Invitado", edad = 18, activo =
true) {
return {
nombre: nombre,
edad: edad,
activo: activo
};
}
console.log(crearUsuario());
// console.log(crearUsuario("Ana", 25));

//Callback
console.log("Callback");
function procesarDatos (datos, callback) {
console.log("Procesando...");
const resultado = datos.map(x => x * 2);
callback(resultado);
}
// Diferentes callbacks para diferentes comportamientos
procesarDatos ([1, 2, 3], (resultado) => {
console.log("Resultado:", resultado); // [2, 4, 6]
});
procesarDatos ([1, 2, 3], (resultado) => {
console.log("Suma total:", resultado.reduce((a, b) => a +
b));
});