function solution(begin, target, words) {
    const wordKey = new Set(words);
    if (!wordKey.has(target)) return 0;
    
    let min = null;
    dfs(begin, 0, wordKey);
    
    return min ?? 0;
    
    function dfs(start, count, key) {
        if (start === target) {
            min = !min ? count : Math.min(min, count);
            return;
        }
        
        for (const word of words) {
            if (!key.has(word)) continue;
            
            const length = checkStr(start, word);
            if (length !== 1) continue;
            
            const newKey = new Set(key);
            newKey.delete(word);
            dfs(word, count + 1, newKey)
        }
    }
}

function checkStr(str1, str2) {
    let arr = [...str2];
    
    for (const char of [...str1]) {
        for (let i = 0; i < arr.length; i++) {
            if (char !== arr[i]) continue;
            arr[i] = false;
            break;
        }
    }
    
   return arr.filter((c) => c).length;
}