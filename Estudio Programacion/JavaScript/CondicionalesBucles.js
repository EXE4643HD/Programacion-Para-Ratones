//Condicionales If / else
console.log("Condicionales If / else");
edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("No eres mayor de edad");
}
//Condicionales If / else if / else
console.log("Condicionales If / else if / else");
let nota = 7;
if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 6) {
    console.log("Aprobado ");
} 
else {
    console.log("Has suspendido");
}

//Condicionales Switch
console.log("Condicionales Switch");
let dia = 3;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Día no válido");
}

//Bucles For
console.log("Bucles For");
for (let i = 0; i < 5; i++) {
    console.log("Iteración:", +i);
}
//Salida: 0,1,2,3,4

//Bucles While
console.log("Bucles While");
let n = 1;
while (n <= 3) {
    console.log("Número:", n);
    n++; // Es importante incrementar n para evitar un bucle infinito.
}

//Bucles Do While
console.log("Bucles Do While");
let m = 1;
do {
    console.log("Número:", m);
    m++;
} while (m <= 3);

//Metodo ForEach
console.log("Metodo ForEach");
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((num, i) => {
    console.log(`Posición: ${i}: ${num * 2 }`);
});
