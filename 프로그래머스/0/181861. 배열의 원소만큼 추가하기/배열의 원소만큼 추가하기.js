function solution(arr) {
    var answer = [];
    arr.map((num) => {
        for (var i=0; i<num; i++){
            answer.push(num);
        }
    });
    return answer;
}