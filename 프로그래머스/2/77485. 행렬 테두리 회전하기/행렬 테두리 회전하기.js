function solution(rows, columns, queries) {
    const arr = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            row.push(i * columns +  j + 1);
        }
        arr.push(row);
    }
    
    const result = [];
    for (const query of queries) {
        let min = Number.MAX_SAFE_INTEGER;
        const [x1, y1, x2, y2] = query.map(q => q - 1);
        let last = arr[x1][y1];
       
        for (let i = y1 + 1; i <= y2; i++) {
            min = Math.min(last, min);
            const num = arr[x1][i];
            arr[x1][i] = last;
            last = num;
        }
       
        for (let i = x1+1; i <= x2; i++){
            min = Math.min(last, min);
            const num = arr[i][y2];
            arr[i][y2] = last;
            last = num;
        }
        
        for (let i = y2 - 1; i >= y1; i--){
            min = Math.min(last, min);
            const num = arr[x2][i];
            arr[x2][i] = last;
            last = num;
        }
        
        for (let i = x2 - 1; i >= x1; i--){
            min = Math.min(last, min);
            const num = arr[i][y1];
            arr[i][y1] = last;
            last = num;
        }
        
        result.push(min)
    }
    
    return result;
}