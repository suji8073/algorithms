function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    let result = 0;
    bfs();
    
    return result;
    
    function bfs() {
        const queue = [[begin, 0]];
        const visited = Array(words.length).fill(false);
        
        while (queue.length > 0){
            const [next, count] = queue.shift();
            
            if (target === next){
                result = count;
                return;
            }
            
            for (let i = 0; i < words.length; i++){
                if (!visited[i] && checkStr(next, words[i])){
                    visited[i] = true;
                    queue.push([words[i], count+1]);
                    visited[i] = false;
                }
            }
        }

    }
}




function checkStr(str1, str2){
    let count = 0;
    const target = [...str2];
    
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            count++;
        }
        if (count > 1) return false;
    }
    return true;
}