const BBDD = [
    product1 = {
        id: 1,
        name: 'product1',
        price: 100,
        amount: 0

    },
    product2 = {
        id: 2,
        name: 'product2',
        price: 100,
        amount: 0

    },
    product3 = {
        id: 3,
        name: 'product3',
        price: 100,
        amount: 0

    },
    product4 = {
        id: 4,
        name: 'product4',
        price: 100,
        amount: 0

    },
    product5 = {
        id: 5,
        name: 'product5',
        price: 100,
        amount: 0

    },
    product6 = {
        id: 6,
        name: 'product6',
        price: 100,
        amount: 0

    },
    product7 = {
        id: 7,
        name: 'product7',
        price: 100,
        amount: 0

    },
    product8 = {
        id: 8,
        name: 'product8',
        price: 100,
        amount: 0

    },
    product9 = {
        id: 9,
        name: 'product9',
        price: 100,
        amount: 0

    }
];
let cart = [];
let cartPrice = [];
var reducer = (accumulator, curr) => accumulator + curr;

function addToCart(id) {
    let product = prompt(`
        Select a product : 
        1 - 9 
    `);
    parseInt(product);

    if (product == 1 || product == 2 || product == 3 || product == 4 || product == 5 || product == 6 || product == 7 || product == 8 || product == 9) {
        id = product;
    }else{
        alert(`
            Pleashe Choose A valid Option.
        `)
    }





    let producto = BBDD.find(producto => producto.id == id);
    cart.push(producto);

    let amount = parseInt(prompt(`
        How many shoes do you want?
        1 - 10
    `));

    let totalAmount = producto.amount = amount;
    let totalPrice = totalAmount * producto.price;
    cartPrice.push(totalPrice);
    let totalResult = cartPrice.reduce(reducer);
    console.log(totalResult);



    let buyAgain = prompt(`
        Do you Want to Buy Again? 
        1: yes
        2: no
    `);

    if (buyAgain == 1) {
        addToCart();
    }else{
        alert(`
            Total Price: ${totalResult};
        `)
    }

}



