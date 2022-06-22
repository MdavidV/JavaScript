const title = document.querySelector('.titulo-usuario');
const usuario = localStorage.getItem('user');
title.innerText = `Bienvenido ${usuario}`;


const productoJSON = localStorage.getItem('Producto1');
const producto = JSON.parse(productoJSON);

console.log(producto);


document.querySelector('.producto').innerHTML = `

            <h3>${producto.nombre}</h3>
            <h4> Precio: ${producto.precio} $ </h4>

`;

// var productos = [];

// function Product (nombre, marca, precio) {
//     this.nombre = nombre, 
//     this.marca = marca, 
//     this.precio = precio
// }

// const producto1 = new Product('G502 hero', 'Logitech', '120$');
// const producto2 = new Product('G502 hero', 'Logitech', '120$');
// const producto3 = new Product('G502 hero', 'Logitech', '120$');
// productos.push(producto1, producto2, producto3);

// console.log(producto1);


// // CLASES

// class Mascota {

//     constructor(nombre, edad, tipo){
//         this.nombre = nombre, 
//         this.edad = edad, 
//         this.tipo = tipo
//     }


//     saludar(){
//         alert(this.nombre + `te esta saludando!`);
//     }

//     cumplirAnios(){
//         this.edad += 1;
//     }

// }


// const mascota1 = new Mascota('Ronnie', 6, 'perro');

// console.log( mascota1);