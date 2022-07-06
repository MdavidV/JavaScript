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

const renderProducts = () => {
  const container = document.querySelector(".products-main");

  BBDD.forEach((product) => {
    let productHTML = `

    <div class="product">
      <img src="${product.img}" />
      <div class="product-details">
        <h2 class="product-name">${product.nombre}</h2>

      <button class="btn" onclick="addToCart(${product.id})">
        <span class="text1">${product.precio}</span>
        <span class="text2">
          Add to Cart
          <i class="fa-solid fa-cart-arrow-up"></i>
        </span>
      </button>
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
