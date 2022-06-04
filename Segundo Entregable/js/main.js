const pilot1 = {
    name: 'Pecco Bagnaia',
    numPilot: '63',
    min: minRandomize(1, 3),
    sec: secRandomize(20, 60),
    ms: msRandomize(100, 1001)
}
const pilot2 = {
    name: 'Enea Bastianini',
    numPilot: '23',
    min: minRandomize(1, 3),
    sec: secRandomize(20, 60),
    ms: msRandomize(100, 1001)
}
const pilot3 = {
    name: 'Jack Miller',
    numPilot: '93',
    min: minRandomize(1, 3),
    sec: secRandomize(20, 60),
    ms: msRandomize(100, 1001)
}
const pilot4 = {
    name: 'Fabio Quartararo',
    numPilot: '20',
    min: minRandomize(1, 3),
    sec: secRandomize(20, 60),
    ms: msRandomize(100, 1001)
}
const pilot5 = {
    name: 'Marco Bezzechi',
    numPilot: '72',
    min: minRandomize(1, 3),
    sec: secRandomize(20, 60),
    ms: msRandomize(100, 1001)
}
const pilot6 = {
    name: 'Marc Marquez',
    numPilot: '93',
    min: minRandomize(1, 3),
    sec: secRandomize(20, 60),
    ms: msRandomize(100, 1001)
}
const pilot7 = {
    name: 'Aleis Espargaro',
    numPilot: '41',
    min: minRandomize(1, 3),
    sec: secRandomize(20, 60),
    ms: msRandomize(100, 1001)
}































//  FUNCIONES GENERADORAS DE TIEMPO

function minRandomize(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function secRandomize(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function msRandomize(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}


