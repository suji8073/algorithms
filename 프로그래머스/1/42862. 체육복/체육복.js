function solution(n, lost, reserve) {
    const arr = Array(n).fill(1);
    
    lost.map(l => arr[l-1]--);
    reserve.map(r => arr[r-1]++);

    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) continue;
        
        if (i !== 0 && arr[i-1] > 1) {
            arr[i-1]--;
            arr[i]++;
        } else if (i + 1 < n && arr[i+1] > 1){
            arr[i+1]--;
            arr[i]++;
        }
    }
    
    return arr.filter(n => n >= 1).length;
}
