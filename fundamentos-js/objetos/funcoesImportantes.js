const pessoa = {
    nome: 'Bia',
    idade: 30,
    peso: 70
}

//acessando chaves do objeto
console.log(Object.keys(pessoa)) //[ 'nome', 'idade', 'peso' ]

//acessando valores do objeto
console.log(Object.values(pessoa)) //[ 'Bia', 30, 70 ]

//acessando chaves e valores do objeto
console.log(Object.entries(pessoa)) //[ [ 'nome', 'Bia' ], [ 'idade', 30 ], [ 'peso', 70 ] ]

//Percorrendo chaves e valores do objeto (usando o destructuring)

//usando o destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
//nome: Bia
//idade: 30
//peso: 70

//sem usar o destructuring
Object.entries(pessoa).forEach(elemento => {
    console.log(`${elemento[0]}: ${elemento[1]}`)
})
//nome: Bia
//idade: 30
//peso: 70


//Definindo a propriedade de um objeto. Podemos definir não só um nova propriedade como suas caracteristicas
//primeiro define o objeto que quero incluir(targed), depois o nome da propriedade entre aspas, e um objeto com todas as caracteristicas da propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,    //pode ser listada
    writable: false,     //não poder ser modificada
    value: '26/03/1991'  //valor a ser adicionado na propriedade
})

//Object.assing pega o primeiro objeto declarado e usa como DESTINO para concatenar os objetos seguintes, 
//Lembrando que caso alguns outra objeto sobrescreva o valor de um objeto já existente o úlitmo valor é o que fica.
const objetoDeDestino = { a: 1}
const obj01 = { b: 2}
const obj02 = { c: 3, a: 4}
const objetoFinal = Object.assign(objetoDeDestino, obj01, obj02)

console.log(objetoFinal) //{ a: 4, b: 2, c: 3 }

//congelar objeto
Object.freeze(objetoFinal)
obj01.b = 8

console.log(objetoFinal) //{ a: 4, b: 2, c: 3 }, nada acontece porque objeto está congelado. 
