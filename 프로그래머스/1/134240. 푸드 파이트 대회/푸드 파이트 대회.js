function solution(food) {
    var answer = '';
    for (var i = 1; i < food.length; i++){
        const count = Math.floor(food[i] / 2);
        answer += String(i).repeat(count);
    }

    return answer + '0'.repeat(food[0]) + [...answer].reverse().join('');
}