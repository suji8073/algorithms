function solution(k, dungeons) {
    const len = dungeons.length;
    const init = Array(len).fill(false);
    
    let max = 0;
    dfs(k, 0);
    
    return max;
 
    function dfs(hp, count) {
        for (let i = 0; i < len; i++) {
            const [x, y] = dungeons[i];
            if (!init[i] && hp >= x){
                init[i] = true;
                dfs(hp - y, count + 1);
                init[i] = false;
            }
            max = Math.max(count, max);
        }
    }
}