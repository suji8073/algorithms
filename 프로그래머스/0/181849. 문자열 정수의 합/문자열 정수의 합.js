function solution(num_str) {
    return num_str.split('').reduce(
        (prev, num) => prev+ Number(num), 
        0
    );
}

