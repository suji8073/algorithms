function solution(a, b, c, d) {
    const array = [...new Set([a, b, c, d])];
    const len = array.length;
    
    if (len === 1) return 1111 * a;
    if (len === 4) return Math.min(...array);
    if (len === 2 && [a, b, c, d].filter(c => c === a).length === 2) {
        return (array[0] + array[1]) * (Math.abs(array[0] - array[1]));
    }

    const hashMap = new Map();
    
    [a, b, c, d].forEach(char => {
        if (!hashMap.has(char)) {
            hashMap.set(char, 1);
        } else {
            hashMap.set(char, hashMap.get(char) + 1);
        }
    });
    
    if (len === 3) {
        for (const [key, value] of hashMap){
            if (value === 2) {
                hashMap.delete(key);
                break;
            }
        }
        
        const keys = Array.from(hashMap.keys())
        return keys[0] * keys[1];
        
    }
    
    var max = 0;
    var min = 0;
    
    for (const [key, value] of hashMap){
        if (value === 3) max = key;
        if (value === 1) min = key;
    }
    
    
    return (10 * max + min)**2;
 
    return answer;
}