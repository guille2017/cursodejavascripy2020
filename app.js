console.log({ "username": 'guille',
"score": 70.6,
"hours": 15,
"proffesional": true});

var nameuser= "guille";
let lastname = "flores";

nameuser='augusto';
const PI = 3.1415;

console.log(nameuser)
console.log(PI)

// comentarios
/*NODADSSDFDSFSDFSDFDSFSDFFSSAFSA

let username = 'flores';

// camelcase

/* el siguiente comentario ocupa multiples lineas
* 
f
f
f
f
f
*/

let numberone= 62;
let numbertwo= 100;

let result = numberone + numbertwo;
console.log(result);


let number = 100;
let lastnumber = 500;
let respuest = number >= lastnumber;
console.log(respuest);


// probamos las condicionales if// true and false//

let passwordDB ='guille1979'

let input = 'guille1979'

let result2= input == passwordDB; // comparacion de contraseña//

// condicional// queresmos que haga algo//
if (result2 == true) {
     console.log('login correcto');
}else{
    console.log('constraseña incorrecta');
}




/// condicional // si la contraseña es incorrecta//
if (result2 == false) {
    console.log('login incorrecto');
}

console.log(result2);

//CONDICIONALES// controlar el flujo de datos

let score = 70;
if(score > 30) {
    console.log('you need to practice more');
}
else if(score > 15){
    console.log('estas mejorando');

}
else{
    console.log(' tu estas mejorando en este tutorial')
}
 /// condicional con swchit chequeamos cual es la tarjeta de credito o debito
 let typecard = 'hdhfhsdfhdshf';
 switch(typecard){
     case 'tarjeta debito':
         console.log('esta es una tarjeta de debito');
         break;
         case 'tarjeta credito':
             console.log('esta es una tarjeta de credito');
             break;
        default:
            console.log('no tienes tarjeta');
 }

 /// bucles ///
 let count = 50;
 while(count > 0) {
     console.log('hello world');
     count = count - 1;
 }
// muestra todos los numeros del 50 hasta el 1
 let count1 = 50;
 while(count1 > 0) {
     console.log(count1);
     count1 = count1 - 1;
 }
// proceso inverso muestra los numeros hasta el 50

let count2 = 0;
 while(count2 <= 50) {
     console.log(count2);
     count2++;
 }
 // blucle infinito un Error / tarea que se repite y no para

// let count3 = 1;
 //while(count3 > 0) {
    // console.log(count3);
    // count3++;
 //}
 
 // FOR elemento dentro de una lista (0,1,2,3) indice
 let name = ['joan','eric','saya', 'mario'];
 console.log(name[3])

 //FOR puedo obtener la logitud de elementos
 let name1 = ['joan','eric','saya', 'mario'];
 console.log(name1.length);

 // utilizamos en for para recorrer los elementos
 let nombre = ['juan','jose','dario'];

 for(let i=0; i < nombre.length; i++) {
 
      console.log(nombre[i]);

 }

 // utilizamos en for para recorrer los elementos y disminuir su valor
 let nombre1 = ['pedro','santo','jairo'];
 
 for(let i= nombre1.length; i>= 0; i--) {
 
      console.log(nombre1[i]);

 }

 // utilizamos en for para recorrer los elementos y solo me muestra 2 elementos
 let nombre2 = ['clara','jack','blanco'];
 
 for(let i= nombre2.length - 1; i > 0; i--) {
 
      console.log(nombre2[i]);

 }


 // utilizamos en for para recorrer los elementos y solo me muestra todos elementos
 let nombre3 = ['clara','jack','blanco'];
 
 for(let i= nombre3.length - 1; i >= 0; i--) {
 
      console.log(nombre3[i]);

 }
// los bucles for se utilizan para listas integrador
/*--------------*/

// funciones //

function greeting() {
    console.log('hello');

}

greeting();

greeting();

// funciones//
function greeting(person) {
    
    console.log('hello' + person);

}

greeting('guille');
greeting('jose');
greeting('luis');
greeting('juan');
greeting('guille');
greeting('guille');
greeting('guille');
greeting('guille');
greeting('guille');
greeting('guille');

// funcion sumar ///
function add(n1,n2) {
    console.log(n1 + n2);
}

add(3,2);
add(300,200);
add(31,22);
add(3333,2222);


