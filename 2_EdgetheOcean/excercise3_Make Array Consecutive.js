// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.


function solution(statues) {
    statues=statues.sort((a, b) => a - b)
    
    let numerosFaltantes=0
    let numeroMenor=statues[0]

    for (let i = 0; i < statues.length; i++) {
        
        if ((i+1)!==(statues.length)) {
            numeroMenor=statues[i+1]-statues[i]
            if (numeroMenor!==1) {
                console.log("ingreso",numeroMenor)
                numerosFaltantes=numerosFaltantes+(numeroMenor-1)
            }
        }
          
    }
    return numerosFaltantes
}
