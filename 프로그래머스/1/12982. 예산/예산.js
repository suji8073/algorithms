function solution(d, budget) {
    d.sort((a,b) => a-b);
    
    var sum = 0;
    for (var i=0; i<d.length; i++) {
        sum += d[i];
        if (sum > budget){
            return i;
        }
    }
 
    return d.length;
}