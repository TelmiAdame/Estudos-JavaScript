

//Usando a notação literal
const objeto1 = {}
console.log(objeto1)

//Objeto em JS, a partir do operador new 
console.log(typeof Object, typeof new Object) 

const objeto2 = new Object()  //pode ser sem ()
console.log(objeto2)

//Funções construtoras 
function Produto(nome, preco, desconto){
    this.nome = nome //assim nome não está mais encapsulada, ou seja, visibilidade pública
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('caneta', 2.00, 0.15)
const p2 = new Produto('lápis', 1.00, 0.10)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory (que fábrica alguma coisa, nesse caso um objeto)
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
         return (salarioBase / 30) * (30 - faltas)
        }
    }
}
console.log(criarFuncionario("João", 2500.00, 2))
console.log(criarFuncionario("Bia", 5500.00, 0))

// Objetc.creat
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

//Uma função famosa que retorna um objeto..
const fromJSON = JSON.parse('{"info":"Sou um JSON"}') //converte o texto/JSON em objeto
console.log(fromJSON.info)