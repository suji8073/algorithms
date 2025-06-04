function solution(jobs) {
    jobs.sort((a, b) => a[0] - b[0]);
    let time = 0;
    let idx = 0;
    
    const result = [];
    const heap = [];
    
    
    while(idx < jobs.length || heap.length > 0) {
        while (idx < jobs.length && time >= jobs[idx][0]) {
            heap.push(jobs[idx]);
            idx++;
        }
        
        if (heap.length > 0){
            heap.sort((a, b) => b[1] - a[1]);
            
            const [t, l] = heap.pop();
            time += l;
            result.push(time - t);
            continue;
        } 
        
        if (idx < jobs.length) {
            time = jobs[idx][0];
        }

    }
    
    return Math.floor(result.reduce((acc, cur) => acc + cur, 0) / result.length);
}