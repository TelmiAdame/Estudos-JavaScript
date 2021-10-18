

/*

Exercício 08

Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).

*/

const jogosString = "30 0 40 60 15 3 2 100 10"
const jogosPedro = jogosString.split(" ")
console.log(jogosPedro)

let resultadosJogos = []
let a = 0
let b = 0
let jogo1 = ""
let jogo2 = ""
let menor = jogosPedro[0]

if(jogosPedro[0] <= jogosPedro[1]){
    a--
}

jogosPedro.filter((jogo1, jogo2) => {
    if(jogo1 <= jogo2 ){
        jogo1 = jogo2
        a++
    }else{
        jogo1 = jogo1
    }
    for(let i = 0; i <= jogosPedro.length; i++){
        if (jogosPedro[i] <= menor){
            menor = jogosPedro[i]
            b = i 
        }
    }
})

resultadosJogos = [a, b+1]
console.log(resultadosJogos)
