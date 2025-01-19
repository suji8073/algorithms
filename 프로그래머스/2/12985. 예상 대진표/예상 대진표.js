function solution(n,a,b) {
    var count = 0;
    while (a != b){
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        count++;
    }
    
    return count;
}