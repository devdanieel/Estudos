function minhafunçao(){

    console.log('Daniel')
    return
}

minhafunçao()



let arrowF = () => 'daniel'

console.log(arrowF)
console.log(arrowF())

//IIFE (Immediately Invoked Function Expression - ou função imediata)

let retornoDaIIFE = (function(){

   return 'Daniel Almeida'
    
})()

console.log(retornoDaIIFE)

// Função anonima

const somaAnonima = function(num1,num2){
    return num1+num2
}

console.log(somaAnonima(5,5))

//Com arrow functio

const somaArrow = (num1, num2) => {
    return num1+num2
}

//ou ainda

const somaArrowRecuced = (num1,  num2) => num1 + num2

console.log(somaArrow(100, 50))
console.log(somaArrowRecuced(200,400))

//Função fatorial

function fatorial(num){

    return num < 2 ? 1 : num * fatorial(num - 1)
}

console.log(fatorial(6))