function solution(a, b, c, d) {
    const arr = [a, b, c, d];
    const setArr = [...new Set(arr)];
    const len = setArr.length;
    
    if (len === 1) return 1111 * a;
    if (len === 4) return Math.min(...setArr);
    if (len === 2 && arr.filter(c => c === a).length === 2) {
        return (setArr[0] + setArr[1]) * (Math.abs(setArr[0] - setArr[1]));
    }

    const hashMap = new Map();
    
    arr.forEach(char => {
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
}