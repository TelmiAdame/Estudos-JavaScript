
//Criando um array, valores entre conchetes, separados por vírgula
const valores = [7.7, 8.9,6.3,9.2]

//imprimindo valores de acordo com a sua chave, começa em zero, não tem limite.
console.log(valores[0], valores[3])

//caso não exista vai imprimir 'undefined'
console.log(valores[4])

//adicionando um valor
valores[4] = 10
console.log(valores)

//acessando a quantidade de elementos no array
console.log(valores.length)

//adiconar novos elementos no array com push
valores.push({id:3}, false, null, 'teste')
console.log(valores)

//retirar valores do array
console.log(valores.pop()) // retira o último valor
delete valores[0]  //delete o valor especificado 

//o Array é do type object.
console.log(typeof valores)