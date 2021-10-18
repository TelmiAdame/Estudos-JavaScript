


//Exemplo Família <3  - HERANÇA -

const mae = {
    nome: 'Terezinha',
    corCabelo: 'preto',
    corPele: 'preta'
}

const filho = Object.create(mae)
filho.nome = 'Nel'
console.log(filho.nome)
console.log(Object.keys(filho))
console.log(filho.corCabelo)


const filha = Object.create(mae,{
    nome: { value: 'Telmi', writable: false, enumerable: true } // especificand uma propriedade: nome, editável, enumerável
})

console.log(filha.nome)
filha.nome = 'Bia' // não altera porque especificamos que é um atributo não editável 
console.log(Object.keys(filha))  


//Verificando de a propriedade pertence ou não ao objeto que está sendo percorrido com for in.
for(let key in filho) {
    filho.hasOwnProperty(key) ? console.log(`Pertence ao objeto filho: ${key}`) : console.log(`Por herança: ${key}`) 
}
