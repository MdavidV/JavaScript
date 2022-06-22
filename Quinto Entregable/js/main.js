'use strict';

const openModal = document.querySelectorAll('[data-open]');
const closeEls = document.querySelectorAll('[data-close]');
const isVisible = 'is-visible';



// ABRIR LA VENTANA MODAL 

for (const el of openModal) {
    el.addEventListener('click', function () {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
    });
}


// CERRAR LA VENTANA MODAL

for (const el of closeEls) {
    el.addEventListener('click', function () {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
    
}

document.addEventListener('click', e => {
    if (e.target == document.querySelector('.modal-window.is-visible')) {
        document.querySelector(".modal-window.is-visible").classList.remove(isVisible);

    }
});

document.addEventListener("keyup", e => {
    if (e.key == "Escape" && document.querySelector(".modal-window.is-visible")) {
      document.querySelector(".modal-window.is-visible").classList.remove(isVisible);
    }
  });