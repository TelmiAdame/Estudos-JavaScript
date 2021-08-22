//ARMAZENANDO UMA FUNÇÃO EM UMA VARIÁVEL
const imprimirSoma = function (a, b){
    console.log(a+b)
}

imprimirSoma(2,3)

//ARMAZENANDO UMA FUNÇÃO ARROW EM UMA VARIÁVEL
const soma = (a,b) => {
    return a+b
}

console.log(soma(2,3))

//RETORNO IMPLICITO (some {} e o return)
const subtracao = (a,b) => a-b
console.log(subtracao(2,3))

//retorno implicito com apenas um parâmetro
const imprimir2 = a => console.log(a)
imprimirSoma2('Legal!!')