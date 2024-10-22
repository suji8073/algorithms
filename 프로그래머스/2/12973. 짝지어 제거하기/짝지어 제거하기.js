function solution(s) {
    var arr = [s[0]];
    
    for (let i = 1; i < s.length; i++){
        if (s[i] === arr[arr.length -1]){
            arr.pop();
        } else {
            arr.push(s[i])
        }
    }

    return arr.length === 0 ? 1 : 0;
}