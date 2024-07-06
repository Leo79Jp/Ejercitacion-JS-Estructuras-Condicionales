// 8. En una tienda de descuento se efectúa una promoción en la cual se hace un descuento sobre el valor de la compra total según el color de la bolita que el cliente saque al pagar en caja.
// Si la bolita es de color blanco no se le hará descuento alguno, si es verde se le hará un 10% de descuento, si es amarilla un 25%, si es azul un 50% y si es anaranjada un 100%.
// Determinar la cantidad final que el cliente deberá pagar por su compra si se sabe que solo hay bolitas de los colores mencionados.

const bolitaBlanca = 0
const bolitaVerde = 10
const bolitaAmarilla = 25
const bolitaAzul = 50
const bolitaAnaranjada = 100

const prompt = require('prompt-sync')({ siging: true})

let valorCompra = parseInt(prompt('Ingrese el valor de compra: ')); 
const colorBolita = Math.round(Math.random() * (5 - 1) + 1); 

let valorDescuento
switch (colorBolita) {
  case 1:
    valorDescuento = bolitaBlanca;
    break;
  case 2:
    valorDescuento = bolitaVerde;
    break;
  case 3:
    valorDescuento = bolitaAmarilla;
    break;
  case 4:
    valorDescuento = bolitaAzul;
    break;
  case 5:
    valorDescuento = bolitaAnaranjada;
    break;
  default:
    valorDescuento = 0; 

    break;
}
const costoTotal = valorCompra - ((valorDescuento / 100) * valorCompra);
console.log(`El valor de la compra es ${valorCompra} y con el descuento obtenido del ${valorDescuento}% le queda a pagar: ${costoTotal}`)
