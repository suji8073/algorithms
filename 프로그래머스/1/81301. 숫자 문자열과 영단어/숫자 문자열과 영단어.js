const number = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
};

function solution(s) {
    var answer = '';
    var temp = '';

    [...s].forEach((num) => {
        if (!isNaN(num)){
            answer += String(num);
        } else {
            temp += num;
            if (!isNaN(number[temp])){
                answer += String(number[temp]);
                temp = '';
            } 
        }
    })

    return parseInt(answer);
}