

/*
Exercício 06

Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/


function investimento(valorInicial, juros, tempo) {
    let jurosSimples = valorInicial * juros * tempo
    let jurosComposto = valorInicial * Math.pow((1 + tempo), juros) 
    let montanteSimples = valorInicial + jurosSimples
    let montanteComposto = valorInicial + jurosComposto
    return `O primeiro investimento sobre o montante de ${valorInicial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})} terá em ${tempo} meses o total de ${montanteSimples.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}. Já o segundo investimento sobre o mesmo montate terá ${montanteComposto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}. `
}

console.log(investimento(1000, (2/100), 12))

//O primeiro investimento sobre o montante de R$ 1.000,00 terá em 12 meses o total de R$ 1.240,00. Já o segundo investimento sobre o mesmo montate terá R$ 2.052,64. 