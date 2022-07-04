"use strict";

// AGARRAR ELEMENTOS DEL DOM

const cartContainer = document.querySelector("#cartContainer");
const cartOpener = document.querySelector("#cartIcon");
const cartCloser = document.querySelector(".closer");
const mainCartCloser = document.querySelector("#closeCart");
const totalPrice = document.querySelector("#totalPrice");

// Carrito


const renderCart = () => {
  cartContainer.innerHTML = "";

  cart.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("product-in-cart");

    div.innerHTML = `
    <figure class="cart-product-img">
      <img src="${item.img}" alt="">
    </figure>

    <p>${item.nombre}</p>
    <p>${item.precio}$</p>

    <button onclick="removeCart(${item.id})" class="btn-delete">
      <i class="fas fa-trash-alt"></i>
    </button>
    `;

    cartContainer.append(div);
  });
};

const renderTotal = () => {
  let total = 0;

  cart.forEach((product) => {
    total += product.precio;
  });

  totalPrice.innerText = total;
};



const cart = JSON.parse(localStorage.getItem("cart")) || [];
window.onload(renderCart(), renderTotal());




// PRODUCTOS Y LOGICA DEL CARRITO 



renderProducts(".men-products-container");
renderProducts(".women-products-container");

const openCart = () => {
  const cartCont = document.querySelector("#cart");
  const menCont = document.querySelector(".men-products");
  const womenCont = document.querySelector(".women-products");

  menCont.classList.add("hidden");
  womenCont.classList.add("hidden");
  cartCont.classList.remove("hidden");
  cartCont.classList.add("visible");
};

const closeCart = () => {
  const cartCont = document.querySelector("#cart");
  const menCont = document.querySelector(".men-products");
  const womenCont = document.querySelector(".women-products");

  menCont.classList.remove("hidden");
  womenCont.classList.remove("hidden");
  cartCont.classList.add("hidden");
  cartCont.classList.remove("visible");
};

function renderProducts(idDelContenedor) {
  const container = document.querySelector(idDelContenedor);

  BBDD.forEach((product) => {
    let productHTML = `
    <div class="card" id="${product.position}">
        <img src="${product.img}" class="slider-img" />
        <div class="card-details">
          <h2 class="product-name">${product.nombre}</h2>
          <p class="slider-review">${product.precio}$</p>
        <button class="btn-send-card" id="${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    </div>
    `;
    container.innerHTML += productHTML;
  });
}

const addToCart = (id) => {
  let product = BBDD.find((item) => item.id === id);
  cart.push(product);

  localStorage.setItem('cart', JSON.stringify(cart));

  renderCart();
  renderTotal();
};

const removeCart = (id) => {
  const item = cart.find((product) => product.id === id);
  const index = cart.indexOf(item);

  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));

  renderCart();
  renderTotal();
};



//  EVENTOS

cartOpener.addEventListener("click", openCart);
cartCloser.addEventListener("click", closeCart);
mainCartCloser.addEventListener("click", closeCart);
