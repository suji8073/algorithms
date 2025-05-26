class MinHeap{
    constructor() {
        this.heap = [];
    }
    
    push(val) {
        this.heap.push(val);
        this._up();
    }
    
    pop() {
        if (this.heap.length <= 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._down();
        return top;
    }
    
    peek(){
        return this.heap[0];
    }
    
    _up() {
        let idx = this.heap.length - 1;
        while(idx > 0) {
            const parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent] <= this.heap[idx]) break;
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }
    
    _down() {
        let idx = 0;
        const len = this.heap.length;
        
        while(true){
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let small = idx;
            
            if (left < len && this.heap[left] < this.heap[small]) small = left;
            if (right < len && this.heap[right] < this.heap[small]) small = right;
            if (small === idx) break;
            
            [this.heap[small], this.heap[idx]] = [this.heap[idx], this.heap[small]];
            idx = small;
        }
    }
    
    getLength() {
        return this.heap.length;
    }
}

function solution(scovilles, K) {
    const map = new MinHeap();
    scovilles.map(scoville => map.push(scoville));
    
    if (map.peek() >= K) return 0;
    
    let count = 0;
    while (map.getLength() >= 2) {
        count++;
        const first = map.pop();
        const second = map.pop();
        const newFood = first + second * 2;
        
        if (newFood >= K && (map.getLength() === 0 || (map.getLength() > 0 && map.peek() >= K))) { 
            return count;
        }
        
        map.push(newFood);
    }
    
    return -1;
}
