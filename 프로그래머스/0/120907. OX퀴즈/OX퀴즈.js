function solution(quiz) {
    return quiz.map((str) => {
        const [num1, calc, num2, _, num3] = str.split(' ');
        if (+num1 + +num2 * (calc === '+' ? 1 : -1) === +num3){
            return "O"
        }
        return "X"
    })
}