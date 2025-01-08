function solution(n, lost, reserve) {
    const arr = Array(n).fill(1);

    lost.map(l => arr[l-1]--);
    reserve.map(r => arr[r-1]++);
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) continue;
        
        if (i !== 0 && arr[i-1] === 2){
            arr[i-1]--;
            arr[i]++;
            continue;
        }
        
        if (i !== arr.length - 1 && arr[i+1] === 2){
            arr[i+1]--;
            arr[i]++;
        }
    }
    
    return arr.filter(a => a!== 0).length;
}


function solution(n, lost, reserve) {
    const realLost = lost.filter(l => !reserve.includes(l)).sort();
    const realReserve = reserve.filter(r => !lost.includes(r)).sort();
    
    let lostNum = realLost.length;

    for (const num of realLost) {
        let index = realReserve.findIndex(r => r === num - 1);
        if (index !== -1) {
            realReserve.splice(index, 1);
            lostNum--;
            continue;
        }
        
        index = realReserve.findIndex(r => r === num + 1);
        if (index !== -1) {
            realReserve.splice(index, 1);
            lostNum--;
            continue;
        }
    }
    
    return n - lostNum;
}
