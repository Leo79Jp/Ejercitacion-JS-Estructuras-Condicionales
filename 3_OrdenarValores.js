// 3. Ordenar en forma creciente tres valores diferentes A, B, C.
const prompt = require('prompt-sync')({ siging: true})

let A = parseInt(prompt('Ingrese el primer número: ')); 
let B = parseInt(prompt('Ingrese el segundo número: ')); 
let C = parseInt(prompt('Ingrese el tercer número: ')); 


if (A>B && A>C && B>C) {
    console.log('Se da la primera condición!');
    console.log('Variable C = ' + C);
    console.log('Variable B = ' + B);
    console.log('Variable A = ' + A);
} else if (A>B && A>C && C>B){
    console.log('Se da la segunda condición!');
    console.log('Variable B = ' + B);
    console.log('Variable C = ' + C);
    console.log('Variable A = ' + A);
}else if (B>A && B>C && A>C){
    console.log('Se da la tercera condición!');
    console.log('Variable C = ' + C);
    console.log('Variable A = ' + A);
    console.log('Variable B = ' + B);
}else if (B>A && B>C && C>A){
    console.log('Se da la cuarta condición!');
    console.log('Variable A = ' + A);
    console.log('Variable C = ' + C);
    console.log('Variable B = ' + B);
}else if (C>A && C>B && A>B){
    console.log('Se da la quinta condición!');
    console.log('Variable B = ' + B);
    console.log('Variable A = ' + A);
    console.log('Variable C = ' + C);
}else if(C>A && C>B && B>A){
    console.log('Se da la sexta condición!');
    console.log('Variable A = ' + A);
    console.log('Variable B = ' + B);
    console.log('Variable C = ' + C);
}



