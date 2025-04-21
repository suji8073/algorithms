function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    var answer = 0;
    let target = Number.MIN_SAFE_INTEGER;
    for (const [start, end] of routes){
        if (target >= start && target <= end) continue;
        answer++;
        target = end;
    }
    return answer;
}