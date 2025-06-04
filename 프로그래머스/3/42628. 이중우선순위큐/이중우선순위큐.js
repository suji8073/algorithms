function solution(operations) {
    const heap = [];
    
    for (const operation of operations){
        const [op, num] = operation.split(' ');
        
        if (op === 'I'){
            heap.push(Number(num));
            continue;
        }
        
        if (num === '1'){
            const maxNum = Math.max(...heap);
            heap.splice(heap.indexOf(maxNum), 1);
        } else {
            const minNum = Math.min(...heap);
            heap.splice(heap.indexOf(minNum), 1);
        }
    }
    
    return heap.length === 0 ? [0, 0] : [Math.max(...heap), Math.min(...heap)];
}