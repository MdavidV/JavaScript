// function nombreFuncion(parametro){
//     instrucciones
// }

// el hoisting es totalmente personal tu veras donde pones las funciones, el profesor recomendo hacerlo de a bloques 
function holaMundo(){
    alert('Hola mundo!');
}

function saludar(){
    let nombre = prompt('Ingrese su nombre: ');
    alert('Bienvenido' + nombre + ' a la casa de JS!');
    
    holaMundo();
}


// saludar();


// PARAMETROS DE FUNCION 
// HAY FUNCIONES QUE ESTAN PREPARADAS PARA RECIBIR CIERTOS TIPOS DE DATOS, PODEMOS ENVIARLE VALORES A LA FUNCION  
// LOS PARAMETROS SON VARIABLES QUE SE DECLARAN DENTRO DE LA FUNCION ENTRE SUS PARENTESIS LOS VALORES DE ESTOS 
// SE DEFINEN LUEGO EN EL LLAMADO 

function saludarUsuario(usuario){
    console.log('Bienvenido ' + usuario)
}


// saludarUsuario(prompt('Cual es su nombre: '));


// function getRandom(){
//     return Math.random();
// }

// getRandom();

// console.log(getRandom());


// function getRandomArbitrary(min, max){
//     return Math.random() * (max - min ) + min;
// }


// getRandomArbitrary( );

// console.log(getRandomArbitrary(0,3));



// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// console.log(getRandomInt(1, 3));