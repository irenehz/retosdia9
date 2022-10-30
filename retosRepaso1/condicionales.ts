// Retos de Condicionales

// 1. Trabajar en la rama repaso1 .En una carpeta nueva. Ej: retos1. Guarda estos retos en un
// fichero .js Ej: condicionales.ts

// 2. Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.

// La fecha de nacimiento vendrá indicada por dos números: dia y mes.
// La cabecera de la función tendrá el siguiente aspecto: function zodiac(day, month)




// ACUARIO. Del 21.01 al 19.02

// PISCIS. Del 20.02 al 20.03

// ARIES. Del 21.03 al 20.04

// TAURO. Del 21.04 al 21.05

// GÉMINIS. Del 22.05 al 21.06

// CÁNCER. Del 22.06 al 23.07

// LEO. Del 24.07 al 23.08

// VIRGO. Del 24.08 al 23.09

// LIBRA. Del 24,09 al 23,10

// ESCORPIO. Del 24.10 al 22.11

// SAGITARIO. Del 23.11 al 22.12

// CAPRICORNIO. Del 23.12 al 20.1


function zodiac(day : number, month: string)
{
        if (day>= 21 && month == "enero" || (day <= 19 && month == "febrero"))
        {
            return "acuario"
        }

        else if (day >= 20 && month == "febrero" || (day <= 20 && month == "marzo"))
        {
            return "piscis"
        }
        

        else if (day >= 21 && month == "marzo" || (day <= 20 && month == "abril"))
        {
            return "aries"
        }
        
        else if (day >= 21 && month == "abril" || (day <= 21 && month == "mayo"))
        {
            return "tauro"
        }
        
        else if (day >= 22 && month == "mayo" || (day <= 21 && month == "junio"))
        {
            return "geminis"
        }
        
        else if (day >= 22 && month == "junio" || (day <= 22 && month == "julio"))
        {
            return "cancer"
        }

        else if (day >= 24 && month == "julio" || (day <= 23 && month == "agosto"))
        {
                return "leo"
        }

    
        else if (day >= 24 && month == "agosto" || (day <= 23 && month == "septiembre"))
        {
                return "virgo"
        }
        
        else if (day >= 24 && month == "septiembre" || (day <= 23 && month == "octubre"))
        {
                return "libra"
        }
        else if (day >= 24 && month == "octubre" || (day <= 22 && month == "noviembre"))
        {
            return "escorpio"
        }

        else if (day >= 23 && month == "noviembre" || (day <= 22 && month == "diciembre"))
        {
            return "sagitario"
        }
        else if (day >= 23 && month == "diciembre" || (day <= 20 && month == "enero"))
        {
            return "capricornio"
        }
        else
        {
            return "inserte una fecha válida"
        }


}

console.log(zodiac(20,"septiembre"))






// 3. Realizar un procedimiento que dado el nombre de un país te imprima en que continente
// estás. (Max 5 países por continente).
// La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country)

    function continent(country : string)
    {
        if (country == "Angola" || country == "Sudan" || country == "Senegal" || country == "Congo" || country =="Etiopia")
        {
            return "Africa"
        }
        if (country == "España" || country == "Francia" || country == "Italia" || country == "Alemania" || country == "Grecia")
        {
            return "Europa"
        }
        else
        {
            return "país no encontrado"
        }
    }
    console.log(continent("España"))




// 4. Realizar una función que te imprima por consola el siguiente mensaje:
// - “El numero es par”, si el numero introducido como parámetro de entrada es par
// - “El numero es impar”, si el numero introducido como parámetro de entrada es impar
// La cabecera de la función tendrá el siguiente aspecto: function isEven(number)

        function isEven(number :  number) 
        {
            if (number % 2 == 0)
            {
                return "El número es par";
            }    
            else
            {
                return "El número es impar";
            }
        }

            console.log(isEven(3));

// 5. Subir los cambios a GitHub.





