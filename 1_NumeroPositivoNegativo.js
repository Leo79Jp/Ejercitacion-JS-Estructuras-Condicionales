// 1. Leer una variable N de tipo entero e informar si el numero es positivo, negativo o cero y también si es par, impar o cero. El número cero no es ni positivo ni negativo ni par ni impar.

const variableN = 0
console.log({variableN});

function esPar(a){
    return a % 2 === 0;
}

if (variableN===0){
    console.log('El número es Cero');
}else{
    if (esPar(variableN) === true){
        console.log('El número es PAR');
    }else{
        console.log('El número es IMPAR');
    }
}

if (Math.sign(variableN) === 0){
    console.log('El número es Cero');
}else{
    if (Math.sign(variableN) === 1){
        console.log('El número es Positivo');
    }else{
        console.log('El número es Negativo');
    }
}

const min = -10
const max = 10
const N = Math.round(Math.random() * ( max - min ) + min )
console.log(N);

if (N === 0){
    console.log('El numero es cero')
}else{
    if (N > 0){
        console.log('El numero es positivo');
    }else{
        console.log('El numero es negativo');
    }
}

if (N % 2 === 0){
    console.log('El numero es Par');
}else{
    console.log('El numero es Impar');
}