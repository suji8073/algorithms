function calcLocation(char){
    if (char === 0) return [1,3];
    if (char === '*') return [0, 3];
    if (char === '#') return [2, 3];

    return [(char -1) % 3, Math.floor((char - 1) / 3)];
}

function calcDistance(target, left, right){
    const [t1, t2] = calcLocation(target);
    const [x1, y1] = calcLocation(left);
    const [x2, y2] = calcLocation(right);
    
    const dist1 = Math.abs(x1 - t1) + Math.abs(y1 - t2);
    const dist2 = Math.abs(x2 - t1) + Math.abs(y2 - t2);
    
    if (dist1 === dist2) return 'same';
    return dist1 < dist2 ? 'left' : 'right'
}

function solution(numbers, hand) {
    const result = [];
    let left = '*'
    let right = '#'
    
    for (const num of numbers) { 
        if (num === 1 || num === 4 || num === 7){
            result.push('L');
            left = num;
            continue;
        }
        if (num === 3 || num === 6 || num === 9){
            result.push('R');
            right = num;
            continue;
        }
        
        const check = calcDistance(num, left, right);
        if (check === 'left' || (check === 'same' && hand === 'left')){
            result.push('L');
            left = num;
            continue;
        }
        
         if (check === 'right'|| (check === 'same' && hand === 'right')){
            result.push('R');
            right = num;
            continue;
        }
    }
    
    return result.join('')
}