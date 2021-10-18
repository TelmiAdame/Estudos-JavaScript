//Mecânismo de tratando um erro no JS

function tratarErroELancar (erro) {
    // tudo a baixo é passivel de ser lançado:
    //throw new Erro('...') mensagem
    //throw 10              número
    //throw true            booleano
    //throw 'mensagem'      string
    throw {                 //objeto
        nome: erro.name,
        msg: erro.menssage,
        date: new Date
    }
}

/*Alguns códigos tem a possibilidade de gerar mais algum tipo de erro, neles implementamos o 'try' que significa testar. É um bloco de código que dentro dele tem um código que julga que PODE gerar algum tipo de erro.

Associado a ele está o catch (capiturar/pegar). Automaticamente assim que ocorre uma exessão na execução do código, esse erro cai no catch. Aqui dentro você pode tentar tratar o erro, ou enviar uma mensagem para o user. Nesse caso criamos uma função 'tratarErroELancar' para enviar uma mensagem de erro. 

Outra palavra reservada que temos associada ao bloco de erro é o 'finally'. Ele será executado sempre, mesmo que ocorra erro ou não, esse bloco vai ser chamado.

OBS: sempre tente evitar mandar mensagem internas de código que assustem o usuário. Mande uma mensagem geral.
*/


function imprimirNomeGritando (obj) {
    try {
        console.log(obj.name.UpperCase() + '!!!') //NAME em inglês
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'Roberto'} //NOME em português
imprimirNomeGritando(obj)