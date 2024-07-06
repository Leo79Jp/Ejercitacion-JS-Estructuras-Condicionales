// 9. Ingresar el nombre del estudiante y la nota del examen final (Nota de tipo entero). 
// Asignar la calificación de acuerdo a las notas de la siguiente tabla:
//
// | Nota    | Calificación |
// |---------|--------------|
// | 0 - 2.9 | Desaprobado  |
// | 3 - 5.9 | Aprobado     |
// | 6 - 8.9 | Notable      |
// | 9 - 10  | Sobresaliente|

const prompt = require('prompt-sync')({ siging: true})
let nombreEstudiante = (prompt('Ingrese el nombre del estudiante: ')); 
let notaExamen = parseInt(prompt('Ingrese la nota final: ')); 
 
let Calificación
    if (notaExamen >=0 && notaExamen <=2.9){
        Calificación = 'Desaprobado';
        }else if (notaExamen >=3 && notaExamen <=5.9){
        Calificación = 'Aprobado';
        }else if (notaExamen >=6 && notaExamen <=8.9){
        Calificación = 'Notable';
        }else if (notaExamen >=9 && notaExamen <=10){
        Calificación = 'Sobresaliente';
        }

console.log(nombreEstudiante + ' obtuvo un ' + notaExamen + ' y ah sido ' + Calificación);
