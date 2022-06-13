var reducer = (accumulator, curr) => accumulator + curr;
var notas = [];
const reload = document.getElementById('reload');

reload.addEventListener('click', _ => {  // FUNCION PARA REINICIAR LA PAGINA
    location.reload();
});

function agarrarNotas(){
    var nota1 = parseInt(document.getElementById('work1').value);
    var nota2 = parseInt(document.getElementById('work2').value);
    var nota3 = parseInt(document.getElementById('work3').value);
    var nota4 = parseInt(document.getElementById('work4').value);
    var examen = parseInt(document.getElementById('exam').value);

    notas.push(nota1, nota2, nota3, nota4);


    var totalResult = notas.reduce(reducer)/notas.length * 0.7;
    var examResult = examen * 0.3;
    var totalAverage = totalResult + examResult;
    var contenedor = document.getElementById('total');
    var cont = document.getElementById('ave');
    contenedor.appendChild(document.createTextNode('El total Acumulado de notas (70%) es: ' + totalResult.toFixed(1)));
    contenedor.appendChild(document.createElement('br'));
    contenedor.appendChild(document.createElement('br'));
    contenedor.appendChild(document.createTextNode('La nota del examen y su  porcentaje (30%) : ' + examResult.toFixed(1)));
    cont.appendChild(document.createTextNode('Your total Average is: ' + totalAverage.toFixed(1))); 
}


      



