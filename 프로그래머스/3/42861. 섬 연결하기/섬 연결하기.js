function solution(n, costs) {
    costs.sort((a, b) => a[2] - b[2]);
    const parent = Array.from({length: n}, (_, i) => i);
    
    let costSum = 0;
    for (const [start, end, cost] of costs){
        if (!isSameParent(start, end)){
            costSum += cost; 
            union(start, end);
        }
    }
    
    return costSum;
    
    function union( a, b) {
        a = getFindParent(a);
        b = getFindParent(b);

        if (a < b) {
            parent[b] = a;
        } else {
            parent[a] = b;
        }
    }

    
    function isSameParent(x, y){
        const parentX = getFindParent(x);
        const parentY = getFindParent(y);
        
        return parentX === parentY;
    }
    
    function getFindParent(item) {
        if (parent[item] === item) {
            return item;
        }
        
        return parent[item] = getFindParent(parent[item]);
    }
   
}

