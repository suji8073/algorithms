function solution(dirs) {
    let current = [0, 0];
    const route = new Set();
    
    for (const dir of [...dirs]) {
        const next = [...current];
        
        if (dir === 'U') next[1]++
        else if (dir === 'L') next[0]--;
        else if (dir === 'R') next[0]++;
        else next[1]--;

        if (next[0] >= -5 && next[0] <= 5 && next[1] >= -5 && next[1] <= 5) {
            const k1 = `${current.join(',')}-${next.join(',')}`;
            const k2 = `${next.join(',')}-${current.join(',')}`;
            
            route.add(k1);
            route.add(k2);
            current = next;
        }
    }
    
    return route.size / 2;
}