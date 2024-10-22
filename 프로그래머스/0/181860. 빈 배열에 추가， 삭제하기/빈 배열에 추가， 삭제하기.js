function solution(arr, flag) {
    var answer = "";
    for (var i = 0; i < arr.length; i++) {
        if (flag[i]) {
            answer += String(arr[i]).repeat(arr[i]*2);
        } else {
            answer = answer.slice(0, answer.length - arr[i]);
        }
    }
    return answer.split('').map(Number);
}