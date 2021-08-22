const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log (Number.isInteger(peso1)) // número inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // fixar números de cadas depois do ponto
console.log((10.345).toFixed(2)) // fixar números de cadas depois do ponto
console.log(media.toString(2)) //em binário
console.log(typeof media) // saber qual é o tipo 