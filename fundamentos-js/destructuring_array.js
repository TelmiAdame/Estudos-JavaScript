//definição em destructuing_obj.js
 
//ARRAY

//simples apenas uma nome/valor
const [a] = [10]
console.log(a)

//composta por vários nomes/valores
const [n1, , n3, n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6) // 10 9 undefined 0
//O segundo índice não foi declarado propositamente
//O último foi declaro padrão zero, mas caso não fosse, ele voltaria undefined também, pq não foi atribuído nenhum valor para ele.

//não muito utilizado 
const [,[, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)