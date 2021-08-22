
// Faça um algoritmo que calcule o fatorial de um número.


function fatorial(num){
    let resultado = num
    for( i = num; i >= 2; i --){
        resultado = resultado * (i -1)
    }
    return resultado
}

console.log(fatorial(5))