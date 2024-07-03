// 2. Una institución de educación, con carreras tanto diurnas como vespertinas, considera lo siguiente en su proceso académico:
// si un estudiante de carrera vespertina tiene una nota de presentación mayor o igual a 6, se exime, y si no alcanza el 6 pero tiene una nota de presentación igual o mayor a 3.5, rinde examen. 
// Si el estudiante es de carrera diurna y si su nota de presentación es mayor o igual a 3.5, rinde examen (no hay posibilidad de eximirse). 
// En ambos regímenes, si la nota de presentación es menor que 3.5, reprueba. 
// Hacer la tabla de decisión y escribir el algoritmo correspondiente.

/*          Vespertina | Diurna | Salida
Nota >= 6       x                 Promociona
Nota >= 6                   x     Rinde Examen
Nota >= 3.5     x           x     Rinde Examen
Nota <  3.5     x           x     Reprueba
*/

const carrera = prompt('Ingrese se carrera: ')
const nota = prompt('Ingrese su nota: ')
if (nota < 3.5){
    console.log('Reprueba');
}else{
    if (carrera === 'Vespertina' && nota >= 6){
        console.log('Promociona');
    }else{
        console.log('Reprueba');
    }
}
// const notaVespertinas = 7
// const notaDiurnas = 5
// if (notaVespertinas >= 6 ){
//     console.log('El Estudiante en carrea Vespertina se eximio');
// }else{
//     if (notaVespertinas >= 3.5 ){
//         console.log('El Estudiante en carrea Vespertina rinde examen');
//     }else{
//         console.log('El Estudiante en carrea Vespertina reprobo');
//     }
// }

// if (notaDiurnas >= 6 ){
//     console.log('El Estudiante en carrea Diurnas se eximio');
// }else{
//     if (notaDiurnas >= 3.5 ){
//         console.log('El Estudiante en carrea Diurnas rinde examen');
//     }else{
//         console.log('El Estudiante en carrea Diurnas reprobo');
//     }
// }

