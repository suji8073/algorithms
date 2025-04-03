function solution(n, times) {
    times.sort((a, b) => a-b);
    
    let left = 1;
    let right = times[times.length-1] * n;
    let answer = right;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let count = 0;
        
        times.forEach((time) => {
            const num = Math.floor(mid / time);
            count += num;
        });
        
        if (count >= n) {
            answer = Math.min(answer, mid);
            right = mid -1;
        } else {
            left = mid + 1;
        }
    }
    
    return answer;
}