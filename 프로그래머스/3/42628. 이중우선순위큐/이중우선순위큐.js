function solution(operations) {
    const heap = [];
    
    for (const operation of operations) {
        const [op, num] = operation.split(' ');
        
        if (op === 'I') {
            heap.push(Number(num));
            continue;
        }
        
        heap.splice(heap.indexOf(num === '1' ? Math.max(...heap) : Math.min(...heap)), 1);
    }
    
    return heap.length === 0 ? [0, 0] : [Math.max(...heap), Math.min(...heap)];
}