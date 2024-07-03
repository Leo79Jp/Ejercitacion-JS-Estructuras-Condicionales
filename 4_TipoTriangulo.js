// 4. Escribir un algoritmo que con solo ingresar los lados de un triángulo rectángulo le dice al usuario si es isósceles, escaleno o equilátero.

// Equilatero = 3 lados iguales --> A == B == C --> A == B y B == C
// Escaleno =  lados distintos --> A != B != C -- > A != B y B!=C y A!=C
// Isosceles = 2 lados iguales y uno distinto --> (A == B y A!=C ) o (B == C y A!=B) o (A==C y A!=B)

const prompt = require('prompt-sync')({ siging: true})

const A = prompt('Ingrese lado A: ')
const B = prompt('Ingrese lado B: ')
const C = prompt('Ingrese lado C: ')

if (A === B && B === C){
    console.log('Es un triangulo equilatero');
}else if (A == B || B == C || A == C){
        console.log('Es un triangulo Isosceles');
    }else{
        console.log('Es un triangulo Escaleno');
    }
