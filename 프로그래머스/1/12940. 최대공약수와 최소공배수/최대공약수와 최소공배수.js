function solution(n, m) {
    var min = 1;
    for (var i=1; i<Math.min(n,m) + 1; i++) {
        if (n % i === 0 && m % i === 0){
            min = i;
        }
    }
    
    var max = n*m;
    for (var j = n*m; j >= Math.max(n,m); j--) {
        if (j % n === 0 && j % m === 0){
            max = j;
        }
    }
    
    return [min, max];
}