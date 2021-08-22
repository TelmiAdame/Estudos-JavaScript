let ativo = false
console.log(ativo)

ativo = true
console.log(ativo)

//DESCOBRINDO  SE O VALOR É TRUE OU FALSE:
ativo= 1
console.log(!!ativo)  // o ! é negação e dois !! é o parâmetro original

//OS VERDADEIROS
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // espaço
console.log(!![]) //array, mesmo vazio
console.log(!!{}) //objeto, mesmo vazio
console.log(!!Infinity)
console.log(!!(ativo = 44)) // qualquer valor que seja verdadeiro, vai ser verdadeiro

//OS FALSOS
console.log('os falsos...')
console.log(!!0) // zero e falso
console.log(!!'') // vazio 
console.log(!!null)
console.log(!!NaN) //not a number
console.log(!!undefined) 
console.log(!!(ativo = false))

//espressão lógiga com o || (ou):
console.log('para finalizar...')
console.log(!!('' || null || 0 || epa))  // aqui ele pega cada uma das coisa e converte para true ou false e se algum valor for verdadeiro ele lança o TRUE.

//exemplo, caso o user não retorne o nome volte 'desconhecido'
let nome = ''
console.log(nome || 'Desconhecido')