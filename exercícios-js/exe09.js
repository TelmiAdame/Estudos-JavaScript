/*

Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.

*/

const listaNotas = [29, 38, 90, 15]

const notasArredondadas = []
listaNotas.forEach(listaNotas => {
    resto = listaNotas % 5
    if(resto === 0){
        listaNotas = listaNotas
        notasArredondadas.push(listaNotas)
    }else if(resto < 3){
        listaNotas = listaNotas - resto
        notasArredondadas.push(listaNotas)
    }else{
        listaNotas = listaNotas + (5 - resto)
        notasArredondadas.push(listaNotas)
    }
})
console.log(notasArredondadas)

notasArredondadas.filter(resultado)
function resultado(listaNotas){
    if (listaNotas >= 40) {
        console.log(` aprovado`)
    }else{
        console.log(`reprovado`)
    }
}

