const escola = [{
    nome: 'Turma Matutino 01',
    aluno: [{
        nome:'Gustavo',
        nota: 8.1
    }, {
        nome:'Ana',
        nota: 7.0
    }]
},{
    nome: 'Turma Matutino 02',
    aluno: [{
        nome:'Rebeca',
        nota: 8.9
    }, {
        nome:'Roberto',
        nota: 7.3
    }]
}]

const notaDoAluno = aluno => aluno.nota
const notasDaTurma = turma => turma.aluno.map(notaDoAluno)

const nota = escola.flatMap(notasDaTurma)
console.log(nota)
