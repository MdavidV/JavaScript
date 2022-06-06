var ms = 0,
    min = 0,
    times = 0,
    convertedTimes = 0,
    auxCont = 0,
    pilotsCont = 0,
    btn = document.getElementById("btn-start"),
    pilotsNames = ['Pecco Bagnaia # 63', 'Jack Miller # 43', 'Aleix Espargaro # 41', 'Enea Bastianini # 23', 'Fabio Quartararo # 20'],
    pilot01 = timerRandomize(0, 5), // ELIGE UN PILOTO DE MANERA ALEATORIA
    pilotsTimer = [];





const reload = document.getElementById('reload');

reload.addEventListener('click', _ => {  // FUNCION PARA REINICIAR LA PAGINA
    location.reload();
});





do {
    ms = timerRandomize(78000, 96000);
    times = ms;
    pilotsTimer.push(times);
    pilotsCont++;
} while (pilotsCont < 5);

// GENERADOR DE TIEMPOS PARA 5 PILOTOS QUE SE GUARDAN EN EL ARRAY 









function timerRandomize(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;  // FUNCION PARA ALEATORIZAR UN NUMERO, ESTE GENERA LOS MILISEGUNDOS
}


function converterMsToMinutes() {
    parseFloat(min = (auxCont / 1000) / 60);
    min = min.toFixed(2);
    convertedTimes = min + ':' + auxCont.toString().substr(0, 3); // CONVERSION DE UNIDADES
    return convertedTimes;
}




function whoWins() {
    function comparatorTimer() {
        pilotsTimer.forEach(element => {
            if (auxCont == 0) {
                auxCont = element;
            } else {
                if (auxCont > element) {
                    auxCont = element;       // SACA EL TIEMPO MAS RAPIDO 
                }
            }
            return auxCont;
        })
    }
    function winner() {
        converterMsToMinutes();
        var caja = document.createElement('div');
        var fotoPiloto;
        var ganador = document.createTextNode('Fastest lap:  ' + pilotsNames[pilot01] + ' - ' + convertedTimes); 

        caja.appendChild(ganador);
        switch (pilot01) {
            case 0:
                fotoPiloto = document.createElement('img');
                fotoPiloto.setAttribute('src', 'assets/pecco.jpg');
                fotoPiloto.setAttribute('class', 'pecco')
                break;
            case 1:
                fotoPiloto = document.createElement('img');
                fotoPiloto.setAttribute('src', 'assets/miller.jpg');
                fotoPiloto.setAttribute('class', 'miller');
                break;
            case 2:
                fotoPiloto = document.createElement('img');
                fotoPiloto.setAttribute('src', 'assets/espargaro.jpg');
                fotoPiloto.setAttribute('class', 'espargaro');
                break;
            case 3:
                fotoPiloto = document.createElement('img');
                fotoPiloto.setAttribute('src', 'assets/bastianini.jpg');
                fotoPiloto.setAttribute('class', 'bastianini');
                break;
            case 4:
                fotoPiloto = document.createElement('img');
                fotoPiloto.setAttribute('src', 'assets/quartararo.jpg');
                fotoPiloto.setAttribute('class', 'quartararo');
                break;
        }


        // AGREGO LA FOTO DEL PILOTO SEGUN EL QUE HAYA ELEGIDO





        var contenedor = document.getElementById('winner');
        contenedor.appendChild(caja)
        contenedor.appendChild(fotoPiloto);

        // CREO EL SECTION Y LOS DIVS 



    }
    comparatorTimer();
    winner();
}






















