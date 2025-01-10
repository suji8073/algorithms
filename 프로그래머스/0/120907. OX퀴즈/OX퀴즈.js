function solution(quiz) {
    return quiz.map((str) => {
        const [num1, calc, num2, _, num3] = str.split(' ');
        
        if (calc === '+' && +num1 + +num2 === +num3){
            return "O"
        }
        if (calc === '-' && +num1 - +num2 === +num3) {
             return "O"
        }
        return "X"
    })
}