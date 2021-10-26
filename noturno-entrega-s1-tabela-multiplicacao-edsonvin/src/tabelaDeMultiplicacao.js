function criaArrays(n) { 
    let numeros = []        //cria o array vazio    
    for(contador = 0;contador <= n; contador++){        //cria primeiro loop
        numeros.push([])        //adiciona primeiro contador ao array
        for (contador2 = 0; contador2 <= n; contador2++){   //cria segundo loop
            result = contador * contador2
            numeros[contador].push(result)      //adiciona segundo contador(2) ao array    
        }
    }    
    console.table(numeros)
}
criaArrays(12)











        


//         for (let contador = 0; contador <= 10; contador++) {
//         x[contador] = [];
// x.length = n +1
//     console.table(x)
