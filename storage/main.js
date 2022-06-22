// localStorage.setItem('key', 'peeeeeeeeedro');

// sessionStorage.setItem('key', 'value');

// let valueLocal = localStorage.getItem('key');

// console.log(valueLocal);

let usuario;
const usuarioLS = localStorage.getItem('user');

if(usuarioLS) {
    usuario = usuarioLS    
}else{
    usuario = prompt('Ingrese su nombre');
    localStorage.setItem('user', usuario);
}




const title = document.querySelector('.titulo-usuario');
title.innerText = `Bienvenido ${usuario}`;




const clearUser = () => {
    localStorage.removeItem('user');
    window.location.reload();
}

document.querySelector('#eliminar').addEventListener('click', clearUser);

// JSON 



const producto = {
    id: 1,
    nombre : 'Logitech G502 Hero LightSpeed',
    dsc: 'un re mouse',
    precio: '487000'
}

// const productoJSON = JSON.stringify(producto);

localStorage.setItem('Producto', producto);
localStorage.setItem('Producto1', JSON.stringify(producto));


console.log(productoJSON);
console.log(typeof productoJSON);


