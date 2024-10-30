function solution(n, words) {
    var stack = [words[0]];
    
    for (let i = 1; i < words.length; i++) {
        const word = stack[stack.length -1];
        if (word.slice(-1) !== words[i].slice(0, 1)) {
            return [i % n + 1, Math.floor(i / n) + 1];
        }
        
        if (stack.includes(words[i])){
             return [i % n + 1, Math.floor(i / n) + 1];
        }
        
        stack.push(words[i]);
   }

    return [0, 0];
}