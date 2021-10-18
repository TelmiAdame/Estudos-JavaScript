/*Primeiro vamos criar uma constante que vai ser uma função arrow '=>'.

antes do '=>' temos apenas uma parâmetro que vai se chamar 'nota' por ser só um podemos tirar as aspas.

tudo após '=> vai ser o ternário, que nada mais é que uma espressão relacional (que só pode retornar true ou false, mais o  operador ternário que é '?' e o return/resultado que vai ser exibido (também podemos pensar como if e else e o retorno)


TERNÁRIO - 3 operandos 

1º EXPRESSÃO RELACIONAL
2º RETORNO 1 - caso seja verdadeiro
3º RETORNO 2 - caso seja falso

*/

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

//Exemplo função arroy com corpo:


const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado(7.1))
console.log(resultado(6.7))