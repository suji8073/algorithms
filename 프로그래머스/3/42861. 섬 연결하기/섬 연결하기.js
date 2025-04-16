function solution(n, costs) {
    costs.sort((a, b) => a[2] - b[2]);
    const parent = Array.from({length: n} , (_, i) => i);
    
    let sum = 0;
    for (const [start, end, cost] of costs){
        if (!sameParent(start, end)){
            sum += cost;
            union(start, end);
        }
    }
    
    return sum;
    
    function union(x, y){
        const p1 = findParent(x);
        const p2 = findParent(y);
        
        if (p1 < p2) parent[p2] = p1;
        else parent[p1] = p2;
    }
    
    function sameParent(x, y){
        const p1 = findParent(x);
        const p2 = findParent(y);
        
        return p1 === p2;
    }
    
    function findParent(t){
        if (parent[t] === t) return t;
        return parent[t] = findParent(parent[t]);
    }

}

