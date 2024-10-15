function solution(N, stages) {
    var array = [];
    let length = stages.length;
    
    for (var i = 0; i < N; i++){
        const count = stages.filter((stage)=> stage === i + 1).length;
        array.push(length === 0 ? 0 : count / length);
        length -= count;
    }
    
    var answer = [];
    for (var j = 0; j < array.length; j++){
        const maxIndex = array.findIndex((num) => num === Math.max(...array));
        answer.push(maxIndex + 1);
        array[maxIndex] = -1;
    }
    
    return answer;
}