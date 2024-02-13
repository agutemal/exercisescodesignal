//Given the string, check if it is a palindrome.
function solution(inputString) {
    let ispalindrome=false
    let arrayCadena=inputString.split("")
    arrayCadena=arrayCadena.reverse()
    let cadena=arrayCadena.join("")
    if(inputString===cadena){
        ispalindrome=true
    }

return ispalindrome
}
