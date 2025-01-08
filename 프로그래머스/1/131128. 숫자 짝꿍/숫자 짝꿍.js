function solution(X, Y) {
    var tempMap = new Map();
    [...X].map(x => tempMap.set(x, tempMap.has(x) ? tempMap.get(x) + 1 : 1));
    
    const map = new Map();
    for (const y of [...Y]){
        if (!tempMap.has(y)) continue;
        map.set(y, map.has(y) ? map.get(y) + 1 : 1);
    }
    
    if (map.size === 0) return "-1";
    
    const keyArr = [...map.keys()];
    if (keyArr.length === 1 && keyArr[0] === '0') return '0';
    
    let result = '';
    for (key of keyArr){
        if (tempMap.has(key)){
            result += key.repeat(Math.min(map.get(key), tempMap.get(key)));
        }
    }
    return [...result].sort((a, b) => b - a).join('')
}




