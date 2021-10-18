
/*

Sumário

pop
push
shift
unshift
splice 
slice

*/

const frutas = ['uva', 'pera', 'maça', 'manga', 'goiaba']

//remove último elemento do array
frutas.pop()           
console.log(frutas)

//adiciona um último elemento na última posição do array
frutas.push('limão')           
console.log(frutas)

//remove o primeiro elemento do array
frutas.shift()           
console.log(frutas)

//adiciona um elemento na primeira posição do array
frutas.unshift('mamão')           
console.log(frutas)

//adiciona e remove elementos de um array

//adicionar
frutas.splice(2, 0, 'banana', 'tangerina')       //(adicionar no índice 2, não remover ninguém 0, adicionar 'banana' e 'tangerica )    
console.log(frutas)

//remover 
frutas.splice(2, 1, 'banana', 'tangerina')       //(remover no índice 2, um único elemento, ou seja, 'maça )    
console.log(frutas)

//retorna um novo array a partir do índice especificado - pegar uma parte do array -
frutas.slice(3)          
console.log(frutas)

frutas.slice(2, 4)          // cria um novo array entre os indices espeficicados - nesse caso seria até o 4, sem contar o 4. 
console.log(frutas)