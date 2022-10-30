// Retos de Bucles While
// 1. Guardar estos retos en un nuevo fichero. Ej: buclesWhile.ts
// 1. Realizar una función que te devuelva si existe un numero par en el array de números que
// introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)
// 2. Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
// todos los nombres empiezan por M.
// La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)
// 3. Subir los cambios a GitHub.
var arrayNumeros = [7, 8, 5, 9, 10, 21];
function hasEven(numbers) {
    var i = 0;
    while (i < numbers.length) {
        if (numbers[i] % 2 == 0) {
            return true;
        }
        i++;
    }
    return false;
}
hasEven(arrayNumeros);
console.log(hasEven(arrayNumeros));
var nombres = ["Fran", "Vicky", "Tina", "Irene", "Menchu"];
function startWithM(nombres) {
    var i = 0;
    while (i < nombres.length) {
        if (nombres[i][0] !== "M") {
            return false;
        }
        i++;
    }
    return true;
}
console.log(startWithM(nombres));
