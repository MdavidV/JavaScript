const BBDD = [
    product1 ={
        id: 1,
        name: 'product1',
        price: 100,
        amount: 0
    
    },
    product2 ={
        id: 2,
        name: 'product2',
        price: 100,
        amount: 0
    
    },
    product3 ={
        id: 3,
        name: 'product3',
        price: 100,
        amount: 0
    
    },
    product4 ={
        id: 4,
        name: 'product4',
        price: 100,
        amount: 0
    
    },
    product5 ={
        id: 5,
        name: 'product5',
        price: 100,
        amount: 0
    
    },
    product6 ={
        id: 6,
        name: 'product6',
        price: 100,
        amount: 0
    
    },
    product7 ={
        id: 7,
        name: 'product7',
        price: 100,
        amount: 0
    
    },
    product8 ={
        id: 8,
        name: 'product8',
        price: 100,
        amount: 0
    
    },
    product9 ={
        id: 9,
        name: 'product9',
        price: 100,
        amount: 0
    
    }
];
let cart = [];

function addToCart(id){
    let product = prompt(`
        Select a product : 
        1 - 9 
    `);

    if(product == 1){
        id = 1;
    }else if (product == 2){
        id = 2;
    }else if (product == 3){
        id = 3;
    }else if (product == 4){
        id = 4;
    }else if (product == 5){
        id = 5;
    }else if (product == 6){
        id = 6;
    }else if (product == 7){
        id = 7;
    }else if (product == 8){
        id = 8;
    }else if (product == 9){
        id = 9;
    }else{
        alert('Please, Select a valid option');
    };

    let producto = BBDD.find(producto => producto.id == id);
    let precio = BBDD.find(producto => producto.id == id);
    cart.push(producto);

    let amount = parseInt(prompt(`
        How many shoes do you want?
        1 - 10
    `));

    let totalAmount = producto.amount = amount;
 

    let totalPrice = totalAmount * producto.price;
    alert(
        `
        The total Price is : 
        
        ${totalPrice}$
        
        `
        
    );
    
    let buyAgain = prompt(`
        Do you Want to Buy Again? 
        1: yes
        2: no
    `);

    if(buyAgain == 1){
        addToCart();
    }
   
}



