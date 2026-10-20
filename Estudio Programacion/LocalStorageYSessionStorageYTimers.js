//LocalStorage: La información permanece guardada incluso después de cerrar el navegador. Los datos persisten hasta que el 
// usuario los elimine manualmente o uses código para borrarlos.

//SessionStorage: La información se borra automáticamente al cerrar la pestaña o ventana del navegador. Ideal para datos 
// temporales de una sesión específica.

// Metodos Fundamentales de Storage
//1 setItem(clave, valor) : Guarda un nuevo dato o actualiza uno existente. La clave actua como 
// identificador unico para recuperar el valor posteriormente.

//2 getItem(clave) : Recupera el valor asociado a la clave especificada. Devuelve null si la clave no existe en el Storage.

//3 removeItem(clave): Elimina un elemento del Storage utilizando su clave. Si la clave no existe, no hace nada.

//4 clear(): Elimina todos los elementos del Storage, dejando el Storage vacío.

//Ejemplo de uso de LocalStorage
console.log("Ejemplo de uso de LocalStorage");
// Guardar datos en LocalStorage
localStorage.setItem("nombre", "Juan");
localStorage.setItem("edad", "30");
//Leer datos de LocalStorage
console.log(localStorage.getItem("nombre")); // Juan
//Eliminar un dato de LocalStorage
localStorage.removeItem("edad");
//Limpiar todo el LocalStorage
localStorage.clear();

//Trabajando con objetos: json.stringify y json.parse
console.log("Trabajando con objetos: json.stringify y json.parse");
//Objeto JavaScript
const usuario = {
    nombre: "Ana",
    edad: 25,
    email: "Ana@ejemplo.com"
};
//JSON.stringify: Convierte un objeto JavaScript en una cadena de texto.
localStorage.setItem("usuario", JSON.stringify(usuario));

//JSON.parse: Convierte una cadena de texto en un objeto JavaScript.
const data = JSON.parse(localStorage.getItem("usuario"));
console.log(data.nombre); // Ana

//Ejemplo de uso de SessionStorage
console.log("Ejemplo de uso de SessionStorage");
// Guardar datos preferencia temporales en SessionStorage
sessionStorage.setItem("color", "azul");
sessionStorage.setItem("idioma", "español");
//Leer datos de SessionStorage
const colorAcutal = sessionStorage.getItem("color");
console.log(colorAcutal); // azul
//Al cerrar la pestaña o ventana del navegador, los datos de SessionStorage se eliminan automáticamente.

//Timers: Nos permiten ejecutar código después de un cierto tiempo o de manera repetitiva a intervalos regulares.
//setTimeout: Ejecuta una función después de un tiempo específico.
//setInterval: Ejecuta una función de manera repetitiva a intervalos regulares.
//clearInterval: Detiene la ejecución repetitiva de una función establecida.
console.log("Timers: setTimeout, setInterval y clearInterval");

//Ejemplo de setTimeout
console.log("Ejemplo de setTimeout");
console.log("Inicio");
setTimeout(() => {
 console.log("Esto se ejecuta después de 2 segundos");
}, 2000);
console.log("Fin");

//Ejemplo de setInterval y clearInterval Repeticon controlada
console.log("Ejemplo de setInterval y clearInterval Repeticon controlada");
let contador = 0;
const intervalo = setInterval(() => {
    contador++;
    console.log("Contador: " + contador);
    if (contador === 5) {
        clearInterval(intervalo);
        console.log("Se detuvo el intervalo después de 5 repeticiones");
    }
}, 1000);

