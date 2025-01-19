function solution(lines) {
    lines.sort((a, b) => a[0] - b[0]);

    const map = new Map();
    const flatLine = lines.flat().sort((a, b) => a - b);
    for (let i = flatLine[0]; i <= flatLine[flatLine.length-1]; i++){
        map.set(i, 0);
    }
    
    for (let i = 0; i < lines.length - 1; i++) {
        for (let j = i + 1; j < lines.length; j++) {
            const [start1, end1] = lines[i];
            const [start2, end2] = lines[j];
            
            if (start1 <= start2 && end1 > start2){
                const min = Math.min(end1, end2);
                
                for (let k = start2+1; k <= min; k++){
                    map.set(k, map.get(k) + 1)
                }
            }
        }
    };
    
    return Array.from(map).filter(([x, y]) => y !== 0).length
}