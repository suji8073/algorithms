function solution(s) {
    const length = s.length;
    
    if (length !== 4 && length !== 6) return false;
    
    for (var i = 0; i < length ; i++){
        if (isNaN(s[i])){
            return false;
        }
    }
    
    return true;
}