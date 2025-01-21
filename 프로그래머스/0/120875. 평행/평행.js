function solution(dots) {
    const len = 4;
    var map = new Map();

    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            const r = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
            
            if (!map.has(r)) {
                map.set(r, [dots[i], dots[j]]);
                continue;
            }
            
            const value = map.get(r);
            if (!value.includes(dots[i]) && !value.includes(dots[j])) return 1;
            
        }
    }
    return 0;
}