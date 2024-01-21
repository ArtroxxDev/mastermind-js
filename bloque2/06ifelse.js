// control de flujo

// condicionales
// var condicion = false;
// var condicion2 = true;
// if (condicion && condicion2) {
//     // hago esto si se cumple condicion
//     console.log('Estoy en el if');
// } else {
//     // hago esto otro si no se cumple condicion
//     console.log('Estoy en el else');
// }
// // continuo ejecutando





// // Se pueden encadenar
// if (condicion1) {
//     // Entro aqui si cumplo la primera condicion
// } else if (condicion2) {
//     // Entro aqui si cumplo la segunda
// } else if (condicion3) {
//     // Entro aqui si cumplo la tercera
// } else {
//     // Entro aqui si no cumplo ninguna
// }






// // Se pueden anidar
// if (condicion1) {
//     if (condicion2) {
//         // Hago algo
//     }
//     // Luego hago otra cosa
// } else {
//     // Hago otra cosa distinta
// }

/*
TAREA

Se debe realizar un programa que, dados dos números, imprima por pantalla si el primer número es múltiplo del segundo.

Por ejemplo, con las siguientes variables:
var primer = 20;
var segundo = 2;
Se debería imprimir:
20 es múltiplo de 2.
Con las siguientes variables:
var primer = 23;
var segundo = 2;
Se debería imprimir:
23 no es múltiplo de 2. */

function verificacionMultiplo(num1 , num2) {
    if(num1%num2 === 0){
        console.log(num1, " es un multiplo de ", num2);
    } else {
        console.log(num1, " no es un multiplo de ", num2);
    }
}
