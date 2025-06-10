function solution(word) {
    let answer = 0;
    const words = ['A', 'E', 'I', 'O', 'U'];
    let count = 0;
    
    dfs('');
    
    function dfs(str) {
        if (str.length > 5 || answer !== 0) return;
        
        if (str === word) {
            answer = count;
            return;
        }
        
        count++;
        
        for (let i = 0; i < words.length; i++){
            dfs(str + words[i]);
        }
    }
    
    return answer;
}