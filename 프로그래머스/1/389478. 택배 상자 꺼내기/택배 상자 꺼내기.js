function solution(n, w, num) {
    const arr = [];
    for (let i = 1; i <= n; i+= w){
        const row = Array.from({length: w}, (_, idx) => i + idx > n ? false: i + idx);
        arr.push(arr.length % 2 === 0 ? row : row.reverse());
    }
    
    let answer = 0;
    for (let i = 0; i < w; i++){
        const target = arr.map(row => row[i]).filter(Number)
        if (target.includes(num)){
            const idx = target.findIndex(t => t === num)
            answer = target.length - idx;
            break;
        }
    }
   
    return answer;
}