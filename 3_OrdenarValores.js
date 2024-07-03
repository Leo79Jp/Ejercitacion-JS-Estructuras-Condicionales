// 3. Ordenar en forma creciente tres valores diferentes A, B, C.

const A = 3
const B = 2
const C = 1


if (A>B && A>C && B>C){
    console.log('Se da la primera condición!');
    console.log('Variable C = ' + C);
    console.log('Variable B = ' + B);
    console.log('Variable A = ' + A);
} else if (B>A && B>C && A>C){
    console.log('Se da la segunda condición!');
    console.log('Variable C = ' + C);
    console.log('Variable A = ' + A);
    console.log('Variable B = ' + B);
}else{
    console.log('Se da la tercera condición!');
    console.log('Variable B = ' + B);
    console.log('Variable A = ' + A);
    console.log('Variable C = ' + C);
}


