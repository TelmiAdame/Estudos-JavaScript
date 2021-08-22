

//FUNÇÃO SEM RETORNO

function imprimiSoma(a,b){
    console.log(a+b)
}

imprimiSoma(2,3) //retorna 5
imprimiSoma(2) //retorno NaN
imprimiSoma(2, 10, 4, 5, 6, 7, 8) //retorna 12 e ignora restante
imprimiSoma() //retorna NaN

//FUNÇÃO COM RETORNO
function soma(a, b = 1){
    return a + b
}

console.log(soma(2,3)) //retorna 5
console.log(soma(2))   //retorna NaN
console.log(soma())    //retorna NaN