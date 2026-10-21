//Operadores Aritmeticos
let a = 10 ;
let b = 3;

console.log("Operadores Aritmeticos");
console.log("Suma: ", a+b);
console.log("Resta: ", a-b);
console.log("Multiplicacion: ", a*b);
console.log("Division: ", a/b);
console.log("Modulo: ", a%b);

//Operadores de Comparacion
let x = 5;
let y = 10;

console.log("Operadores de Comparacion");
console.log("Igual: ", x == y);
console.log("No igual: ", x != y);
console.log("Mayor: ", x > y);
console.log("Menor: ", x < y);
console.log("Mayor o igual: ", x >= y);
console.log("Menor o igual: ", x <= y);

//Operadores Logicos
let p = true;
let q = false;

console.log("Operadores Logicos");
console.log("AND: ", p && q);
console.log("OR: ", p || q);
console.log("NOT: ", !p);

//Operadores Ternarios
console.log("Operadores Ternarios");
let edadUsuario = 18;
let mensaje = (edadUsuario >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);