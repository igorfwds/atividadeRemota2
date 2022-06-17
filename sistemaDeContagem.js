/* se o numero for par, escreva 'par' e o numero correspondente
se o numero for impar, escreva 'impar' e o número correspondente
se o numero for zero, escreva 'zero' e o número correspondente
*/
const rs = require("readline-sync");

let numero = rs.questionInt('Qual numero voce quer aferir? ');

    if (numero % 2 === 0 && numero !== 0 ) {
        console.log(`O numero ${numero} é par.`);
    } else if (numero === 0) {
        console.log('Zero.');
    }else {
        console.log(`O numero ${numero} é ímpar.`);
    }



// parImparZero(4)
// parImparZero(5)
// parImparZero(0)
// parImparZero(true)
// parImparZero('igor')
// parImparZero(890562987653)