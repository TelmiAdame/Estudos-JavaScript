

//Reduce 

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Ana', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Maria', nota: 8.7, bolsista: false},
]

//Soma a primeira nota com a nota seguinte até somar todas as notas.
const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(`A soma de todas as notas é ${resultado}.`)

// Dessa lista, todos os alunos são bolsistas?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const result = alunos.map(aluno => aluno.bolsista).reduce(todosBolsistas)
console.log(`Todos os alunos são bolsistas? ${result}.`)

//_______________________________________________________________________//

// Algum aluno é bolsista?

const algumBolsistas = (resultado, bolsista) => resultado || bolsista
const res = alunos.map(aluno => aluno.bolsista).reduce(algumBolsistas)

console.log(`Algum aluno é bolsista? ${res}.`)

