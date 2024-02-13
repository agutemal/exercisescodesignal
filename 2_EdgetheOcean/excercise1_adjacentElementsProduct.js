//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function solution(inputArray) {
    let arrayResultado=[]
    for (let i = 0; i < inputArray.length; i++) {
        
        if (parseInt(i+1)<inputArray.length) {
            const element = parseInt(inputArray[i])*parseInt(inputArray[i+1]);
            arrayResultado.push(element)
        }
    }
    
    return Math.max(...arrayResultado)
}
