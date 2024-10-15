function solution(n) {
    return parseInt((n+"").split('').map(Number).sort((a,b) => b-a).join(''));
}

