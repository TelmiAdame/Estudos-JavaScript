

/* 
Exercício 05

Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/

function dinheiro(valor) {
    return  `${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`
}

console.log(dinheiro(0.30000000000000004))



//ANOTAÇÕES
// Math.round() retorna o valor de um número arredondado para o inteiro mais próximo.
// toFixed(2) controla o número de casas decimais após a vírgula

/*
toLocaleString() converte um número para uma string, já tratando a questão do arredondamento e convertendo para a moeda do país
exemplo: 

salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
style : Que é o estilo do formato a ser utilizado, aqui é permitido usar:

decimal para representar números simples.

currency que diz respeito ao formato monetário e que vai indicar a moeda que vai ser utilizada.

percent para formato percentual.
*/

//Math.ceil() que retorna o maior número inteiro que é maior que o número passado, por exemplo Math.ceil(11.123), o valor fica 12

//Math.floor() que retorna o menor número inteiro que é menor que o número passado, por exemplo Math.floor(11.789), o valor fica 11