function solution(dirs) {
    const vector = { L : [-1, 0], R : [1, 0], U : [0, 1], D : [0, -1]};
    let current = [0, 0];
    
    const router = new Set();
    
    for (const dir of dirs) {
        const next = [
            current[0] + vector[dir][0],
            current[1] + vector[dir][1]
        ];
        
        if (next[0] < -5 || next[1] < -5 || next[0] > 5 || next[1] > 5) continue;
        
        const currentPath = `${current.join(',')}-${next.join(',')}`;
        const newPath = `${next.join(',')}-${current.join(',')}`;
        
        if (!router.has(currentPath) && !router.has(newPath)){
            router.add(currentPath);
            router.add(newPath);
        }
        current = next;
    }
    return router.size / 2;
}