
//FILTER

//Filtrando produtos a cima de R$ 5.0

const produtos = [
    {nome: 'Bala', preco: 2.0, doce: true},
    {nome: 'Chiclete', preco: 3.0, doce: true},
    {nome: 'Pirulito', preco: 8.0, doce: true},
    {nome: 'Copo Plástico', preco: 19.0, doce: false},
]

console.log(produtos.filter(function(p){
    return p.preco > 5.0
}))


//Filtrando produtos a cima de R$ 5.0 e que não são doces.
console.log(produtos.filter(produto => produto.preco >= 5.0).filter(produto => produto.doce == false))  //encadeados 

