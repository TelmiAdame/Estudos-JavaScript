/* o novo de recurso de desistruturação, disponível a partir de 2015, 
   tem como função extrair informações de dentro do uma estrutura (um objeto ou array)
   a estrutura é formada por:

   const { info1, info2} = estrutura 

   ** no caso usa {} quando se trata de um objeto e [] quando se trata de um array
 */

// EXEMPLO destructuring:

//OBJETO
const pessoa = {
    nome = 'Ana',
    idade = 5,
    endereco: {
        logradouro: 'ABC',
        numero: 1000
    }
}

// Operador de desestruturação
const {nome, idade}
console.log(nome, idade) //Ana 5


// Extraindo do objeto e criando variavéis com outro nome
const{nome:n, idade:i}
console.log(n,i) //Ana 5


//tentando acessar os atributos que não existem no objeto
const{sobrenome, bemHumorado = true}
console.log(sobrenome, bemHumorado) //undefined  true 
//Nesse caso foi atribuído um valor padrão 'true' em 'bemHumorado' para caso ele não esteja definido não volte undefined


//Para acessar os atributos dentro de outro atributo
//Importante que apenas os atributos mais internos buscados serão exibidos, ou seja 'endereço' nesse caso não vai ser exibito
const{endereço: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep) //ABC 1000 undefined


//Caso você tentar acessar atributos que não existem, de forma alinhada, vai dar bug, ou seja, tenha certeza que o caminho até o dados esteja setado.  
//Nesse caso nem o atributo mais externo existe
const {conta: {ag, conta, nun}}
//console.log(ag, conta, nun) //bug - deixei comentado para não aparecer o erro 

