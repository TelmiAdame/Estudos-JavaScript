


//Cadeia de protótipos (prototype chain)

//Exemplo família 

const avo = { atributo1: 'A'}
const mae = {
    __proto__:avo,
    atributo2: 'B',
    atributo3: 'D' // esse valor é sombreado pelo valor existente na const filha, já que o valor já voi identificado.
}
const filha = {
    __proto__:mae,
    atributo3: 'C' //sobreia o da const mae
}

console.log(filha.atributo1, filha.atributo2, filha.atributo3) // Retorna: A B C

//---------------------------------------------------------------------------------------------------------------------------//

//Exemplo Carro

const carro = {
    velAtual:0,
    velMax: 200, 

    acelerarMAis(oMais) {
        if(this.velAtual + oMais <= this.velMax){
            return this.velAtual = this.velAtual + oMais
        }else{
            return this.velAtual = this.velMax
        }
    }
}

const ferrari = {
    cor: 'vermelho',
    modelo: 001,
    velMax:400, 
}

carro.acelerarMAis(300) 
console.log(carro.acelerarMAis)

Object.setPrototypeOf(ferrari, carro) //criando relação de ferrari com  protótipo carro


//Por padrão são exibidos só os valores do objeto em questão, mas se chamarmos o atributo do protótipo você verá que o vínculo está feito:

console.log(ferrari) // { cor: 'vermelho', modelo: 1, velMax: 400 } 
console.log(ferrari.velAtual) // 200 - velMaxima permitida, já que 'this.velAtual + oMais' ultrapassa o velMaxima permitida

