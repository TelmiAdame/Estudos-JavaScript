const escola = 'Cod3r'

console.log(escola.charAt(4)) // na possição 4 encontrou a letra 'r'-começar conta do 0
console.log(escola.charAt(5)) // não encontrou nada nessa possição 
console.log(escola.charCodeAt(3)) //número referente no unicode
console.log(escola.indexOf('3')) // tenho número e quero saber em que índice a palavra está

console.log(escola.substring(1)) //mostrado indice 1 até o final
console.log(escola.substring(0,3)) // mostra do indice 0 até o 3, mas não mostra o 3

console.log('Escola'.concat(escola).concat('!')) //concatenação modo 1
console.log('Escola'+ escola + '!') //concatenação modo 2
console.log(escola.replace(3, 'e')) // substitui o 3 pelo 'e' 

console.log('Ana,Maria,Pedro'.split(',')) //pegar um a string e converter p/ um array, e ecolhe a quebra, nesse caso foi a vígula 


