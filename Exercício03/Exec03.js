/*
//Teste no inicio
var c = 1
while(c < 10){

    console.log('Boa tarde!!!')

    c++
}

//Teste no final

var c = 1

do {
    
    console.log('Boa Noite!!!')
    c++
} while(c < 10 )



//Estrutura de repetição com variavel de controle.


for(var c = 1; c <= 5; c++ ) {

    console.log('Bom dia!!!')
}



let valores = [0,2,4,6,8,10]

for(let pos = 0; pos < valores.length; pos++) {

    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}


for(let pos in valores) { //simplicação para array e objects

    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}



//valores.sort() //ordena os valores doo array
//valores.push(1) //acrescenta uma posição dentro da variavel valores com o valor de 1.

console.log(valores)

let valor = valores.indexOf(10) // Buscando valores dentro do array

    if(valor == -1){

        console.log('Valor não encontrado...')
    }    
   
    else {

    console.log(`O valor ${valores[valor]} esta na posição ${valor}`)

    }

 */

function parimp(n) {
    if(n % 2 == 0) {

        return 'Par!'

    }
    else {
        return 'Impar!'
    }
}  

console.log(parimp(20))