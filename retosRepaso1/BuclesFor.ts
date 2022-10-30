// Retos de Bucles For

// 1. Guardar estos retos en un nuevo fichero. Ej: buclesFor.ts

// 2. Realizar una función que imprima los números impares existentes hasta el número
// indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)

// 3. Realizar una función que como parámetro de entrada reciba un array y como salida
// devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)

// 4. Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)

// 5. Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)

// 6. Subir los cambios a GitHub.

function evenNumbers(num: number){

    let impares: number[] = [ ];

    for (let i = 0; i < num; i++){

        if ((i % 2) == 1){

            impares.push(i);
        } 
    } 
    console.log(impares);
}

let myArray = [1,2,3,4,5,6,7,8,9,10];
let arrayRevertido: any[] = [];

function myRevert(myArray: any[]){


         for(let i = myArray.length -1; i > 0; i--){ 
           arrayRevertido.push(myArray[i]);
    }

    return arrayRevertido;
}
console.log(myRevert(myArray));
myRevert(arrayRevertido);



let arcoiris: string[] = ["azul", "rojo", "amarillo", "verde", "violeta"];


function isRainbow(colores: string[]){


    for (let i = 0; i < colores.length; i++){

        if(arcoiris.includes(arcoiris[i]))
        {
            console.log("El color " + arcoiris[i] + ", aparece en el arcoiris.");

        }else{
            
            console.log("El color " + arcoiris[i] + ", no aparece en el arcoiris.");
        }
    }
}

isRainbow(["negro"]); 



let myWorlds: string[] = ["Irene", "Fran", "Vicky"];

export function add(myWorlds:string[]): number{

    let suma: number = 0;

    for (let i=0 ; i<myWorlds.length; i++){

        suma = suma + myWorlds[i].length;
    }
    
    return suma;
}

console.log(add(myWorlds));