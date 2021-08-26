/*
Get e Set 

São funções  usadas para ler ou modificar um atributo de maneira segura. Sem que o programador sobrescreva uma informações sem querer, por exemplo.
Podemos tanto acessar as propriedades de um objeto (com getters), quanto alterar os valores dela (com setters).

Alguns pontos importantes a serem destacados para o uso de getters são:
- Pode ter um identificador do tipo numérico ou string.
- Não deve ter nenhum parâmetro.
- Não pode ser utilizado mais de um getter para uma mesma propriedade, assim como não pode haver uma propriedade comum com o mesmo nome do getter.

Alguns pontos importantes a serem destacados para o uso de setters são:
- Pode ter um identificador do tipo numérico ou string.
- Deve ter exatamente um parâmetro.
- Não pode ter a mesma nomenclatura para propriedade e função.
*/

//EXEMPLOS:

let valor = 5
const objetoQualquer = {
    get valor() {
        return `Valor é:` + valor
    },
    set valor(numero){
        valor = numero + 1
    }
}

console.log(objetoQualquer)