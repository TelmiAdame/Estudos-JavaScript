//Nesse exemplo criamos uma função para gerar um rand (um número aleatório) e passamos os valores minimo e máximo dentro da destructuring. 

function rand([min = 0, max = 1000]) {
    //se o mínimo for maior que máximo, inverta o min, pelo máximo
    if (min > max) [min, max] = [max, min]
    //meu deus me ajuda a entender essa linha
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

//testes chamando de diversas formas
console.log(rand([50, 40])) //vai trocar e retornar de forma correta
console.log(rand([992])) //passando só o min o max =1000
console.log(rand([, 10])) //passando apenas o 2º, máximo
console.log(rand([])) //vazio, assume vamores padrões
console.log(rand())  // passando nad da BUG