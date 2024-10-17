function solution(n) {
    var answer = 0;
    var array = Array.from({length: n + 1}).fill(true);
    
    for (var i = 2; i * i <= n; i++) {
        if (array[i]) {
            for (var j = i * i; j <= n; j += i) {
                 array[j] = false;
            }
        }
    }
    return array.filter(a => a).length - 2;
}