const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'

const template = `Olá            
                    ${nome}!` //como é possível, o template suporta a quebra de linha e mantém a concatenação

console.log(concatenacao, template)

// espressões..
console.log(`1+1 = ${1+1}`)

// chamar uma função dentro de uma expressão..
const up = texto => texto.toUpperCase()
console.log(`Ei...${up("cuidade")}!`)

