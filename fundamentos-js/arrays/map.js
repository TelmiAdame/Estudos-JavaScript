
//Map

const number = [1, 2, 3, 4, 5]

let result = number.map(function(e){
    return e * 2
})
console.log(result) //[ 2, 4, 6, 8, 10 ]

//------------------------------//

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` 

result = number.map(soma10).map(triplo).map(paraDinheiro)  // soma10 volta um array, que vai para tripplo que també gera um array que vai ser usado por paraDinheiro.
console.log(result)

//Carrinho de Compras - exercitando - retornar array apenas com os preços

const carrinho = [ 
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Transformando de JSON para Obejto
let transfObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco


let resultados = carrinho.map(transfObjeto).map(apenasPreco)
console.log(resultados)