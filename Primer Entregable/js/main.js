var cantidad = parseInt(prompt('Cuantos Numeros Desea conocer: '));
x = 1;
a = 1;

while(cantidad >= a ){
    let z = 0;
    let y = 1;
    while(x >= y){
        if(x % y == 0){
            z++;
        }
        y++;
    }
    if(z == 2){
        document.write(" " + x + " - ");
        a++;
    }
    x++;

}