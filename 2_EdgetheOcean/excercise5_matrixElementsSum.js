// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

function solution(matrix) {
    let costo=0
    for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i]
    for (let j = 0; j < element.length; j++) {
        if (i-1==-1) {
            costo = element.reduce((prev, curr) =>prev + curr, 0)
        }else{
            if (matrix[i-1][j]==0) {
                element[j]=0
            }else{
                costo=costo+element[j]
            }
        }
    }
}
    return costo
}
    