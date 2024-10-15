function solution(absolutes, signs) {
    var answer = 0;
    absolutes.map((num, index) => {
        answer += (signs[index] ? num : -num);
    })
    return answer;
}