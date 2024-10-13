function solution(my_string, overwrite_string, s) {
    var answer = '';
    for (var i = 0; i < my_string.length; i++){
       if (i >= s && i <= overwrite_string.length + s - 1){
           answer += overwrite_string[i-s];
       } else {
            answer += my_string[i];
       }
    }
    return answer;
}