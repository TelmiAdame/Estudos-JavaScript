/* Você vai realizar dois trabalhos essa semana, para clientes diferentes. Caso os dois trabalhos dêem certo você vai ao shopping comprar uma Tv de 50 polegadas e tormar sorvete. Caso apenas um trabalho dê certo você ainda vai ao shopping combrar uma Tv e tomar sorvete, só que a Tv será de 30 polegadas. Se os dois trabalhos derem errado nenhuma Tv ou sorvete será comprado, você ficara em casa.
*/

//Diante disso construa uma função lógica que retorne valores false ou true. 

function compras (trabalho1, trabalho2) {
    const tomarSorvete = trabalho1 || trabalho2 
    const comprarTV50 = trabalho1 && trabalho2
    const comprarTV30 = trabalho1 != trabalho2 // xor - ou exclusivo - diferença - se 1 for diferente de 2, 1 é exclusivo e vice-versa.
    const mantersaudavel = !tormarSorvete  // negação de sorvete === saldável 

    return {tomarSorvete, comprarTV50, comprarTV50, mantersaudavel}
    // isso é igual a chave:valor --> tomarSorvete:tomarSorvete, só que é possível omitir e não deixar redundante 
}

console.log(compras(true, false))