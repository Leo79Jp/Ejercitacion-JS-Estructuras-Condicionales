// 6. Escribir un algoritmo que permita dada la fecha de nacimiento de una persona saber cuál es su signo zodiacal.


/*  
Acuario: del 20 de enero al 18 de febrero
Piscis: del 19 de febrero al 20 de marzo
Aries: del 21 de marzo al 19 de abril
Tauro: del 20 de abril al 20 de mayo
Géminis: del 21 de mayo al 20 de junio
Cáncer: del 21 de junio al 22 de julio
Leo: del 23 de julio al 22 de agosto
Virgo: del 23 de agosto al 22 de septiembre
Libra: del 23 de septiembre al 22 de octubre
Escorpio: del 23 de octubre al 21 de noviembre
Sagitario: del 22 de noviembre al 21 de diciembre
Capricornio: del 22 de diciembre al 19 de enero
*/
const prompt = require('prompt-sync')({ siging: true})
const año = '2024'
let diaNacimiento = parseInt(prompt('Ingrese dia de nacimiento: ')); 
let mesNacimiento = parseInt(prompt('Ingrese mes de nacimiento: ')); 

if (diaNacimiento >= '20' && mesNacimiento == '1'){
    console.log('Su signo es Acuario');
}else{
    if (diaNacimiento <= '18' && mesNacimiento == '2'){
        console.log('Su signo es Acuario');
    }
}
/////////
if (diaNacimiento >= '19' && mesNacimiento == '2'){
    console.log('Su signo es Piscis');
}else{
    if (diaNacimiento <= '20' && mesNacimiento == '3'){
        console.log('Su signo es Piscis');
    }
}
/////////
if (diaNacimiento >= '21' && mesNacimiento == '3'){
    console.log('Su signo es Aries');
}else{
    if (diaNacimiento <= '19' && mesNacimiento == '4'){
        console.log('Su signo es Aries');
    }
}
/////////
if (diaNacimiento >= '20' && mesNacimiento == '4'){
    console.log('Su signo es Tauro');
}else{
    if (diaNacimiento <= '20' && mesNacimiento == '5'){
        console.log('Su signo es Tauro');
    }
}
/////////
if (diaNacimiento >= '21' && mesNacimiento == '5'){
    console.log('Su signo es Géminis');
}else{
    if (diaNacimiento <= '20' && mesNacimiento == '6'){
        console.log('Su signo es Géminis');
    }
}
/////////
if (diaNacimiento >= '21' && mesNacimiento == '6'){
    console.log('Su signo es Cáncer');
}else{
    if (diaNacimiento <= '22' && mesNacimiento == '7'){
        console.log('Su signo es Cáncer');
    }
}
/////////
if (diaNacimiento >= '23' && mesNacimiento == '7'){
    console.log('Su signo es Leo');
}else{
    if (diaNacimiento <= '22' && mesNacimiento == '8'){
        console.log('Su signo es Leo');
    }
}
/////////
if (diaNacimiento >= '23' && mesNacimiento == '8'){
    console.log('Su signo es Virgo');
}else{
    if (diaNacimiento <= '22' && mesNacimiento == '9'){
        console.log('Su signo es Virgo');
    }
}
/////////
if (diaNacimiento >= '23' && mesNacimiento == '9'){
    console.log('Su signo es Libra');
}else{
    if (diaNacimiento <= '22' && mesNacimiento == '10'){
        console.log('Su signo es Libra');
    }
}
/////////
if (diaNacimiento >= '23' && mesNacimiento == '10'){
    console.log('Su signo es Escorpio');
}else{
    if (diaNacimiento <= '21' && mesNacimiento == '11'){
        console.log('Su signo es Escorpio');
    }
}
/////////
if (diaNacimiento >= '22' && mesNacimiento == '11'){
    console.log('Su signo es Sagitario');
}else{
    if (diaNacimiento <= '21' && mesNacimiento == '12'){
        console.log('Su signo es Sagitario');
    }
}
/////////
if (diaNacimiento >= '22' && mesNacimiento == '12'){
    console.log('Su signo es Capricornio');
}else{
    if (diaNacimiento <= '19' && mesNacimiento == '1'){
        console.log('Su signo es Capricornio');
    }
}



