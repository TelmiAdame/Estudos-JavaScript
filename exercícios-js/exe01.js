 
 
 // Exercício 01 
 //Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function calculos(n1, n2) {
        return  `
        Cálculos:
        Soma de ${ n1 } +${n2} = ${ n1 + n2} 
        Subtração de ${ n1 } - ${n2} = ${ n1 - n2} 
        Multiplicação de ${ n1 } x ${n2} = ${ n1 * n2} 
        ` 

}

console.log(calculos (2, 2))