
/*

Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:  

Plano Aumento 
A     10% 
B     15% 
C     20% 

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. 
 
*/

const salarioAtual = 2000
const plano = 'A'

switch(plano){
    case 'A':
        console.log(`Novo salário será de R$${salarioAtual + (salarioAtual * 0.10)}`)
        break
    case 'B':
        console.log(`Novo salário será de R$${salarioAtual + (salarioAtual * 0.15)}`)
        break
    case 'C':
        console.log(`Novo salário será de R$${salarioAtual + (salarioAtual * 0.20)}`)
        break
    default:
        console.log(`Plano inválido`)
}