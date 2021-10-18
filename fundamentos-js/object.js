//criando objetos, conjuntos de 'CHAVE: VALOR', você pode criar as chaves e ir adicinando os valores dinamicamente:

//1º jeito:
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
console.log(prod1)

//2º jeito:
const prod2 = {
    nome:'Camisa Polo',
    preco: 79.90
}
console.log(prod2)

// podemos colocar um obejeto dentro do outro também:
/*
obj:{
    blá, blá, blá
    obj1{
        blá, blá, blá
    }
}
*/