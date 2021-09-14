
//ForEach
//Lista de Aprovados

const aprovados = ["Bia", "Telmi", "Aldo", "Daniel", "Raquel"]

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
    // indice + 1 porque a contagem começa em zero
})

/*** OBS: forEach pode receber até 3 parêmetros: nome, indice e o array */

/* 
1) Bia
2) Telmi
3) Aldo
4) Daniel
5) Raquel

*/

aprovados.forEach( nome => console.log(nome))

/*
Bia      
Telmi    
Aldo     
Daniel
Raquel
*/

/*** O forEach pode receber até 3 parêmetros: nome, indice e o array */