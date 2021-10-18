//Palavras definidas com a variável de palavra reservada VAR tem escopo global (global, window) e escopo de função. 

//Palavras definidas com a varável com palavra reservada LET tem escopo global, escobo de função e escopo de BLOCO.

//EXEMPLO COM LOOP
for(var i = 0; i<10; i++){
    console.log(i)
}

console.log('i =', i)
//resposta: i = 10 porque é valor que stop o loop

for(let i = 0; i<10; i++){
    console.log(i)
}

console.log('i =', i)
//resposta: i = undefid porque como está dentro de um bloco o sistema não lê ele.
