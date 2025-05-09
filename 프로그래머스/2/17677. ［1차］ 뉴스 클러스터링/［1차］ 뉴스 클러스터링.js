function solution(str1, str2) {
    const map1 = new Map();
    for (let i = 0; i < str1.length - 1; i++){
        const target = str1.slice(i, i + 2).toUpperCase();
        const check = /[^A-Z]/.test(target);
        if (!check){
            map1.set(target, map1.get(target) ? map1.get(target) + 1 : 1);
        }
    }
    
    const map2 = new Map();
    for (let i = 0; i < str2.length - 1; i++){
        const target = str2.slice(i, i + 2).toUpperCase();
        const check = /[^A-Z]/.test(target);
        if (!check){
             map2.set(target, map2.get(target) ? map2.get(target) + 1 : 1);
        }
    }
    
    if (map1.size === 0 && map2.size === 0){
        return 65536;
    }
    
    let sum = 0;
    let value = 0;
    const keys = [...new Set([...map1.keys(), ...map2.keys()])];
    
    for (const key of keys){
        if (map1.has(key) && map2.has(key)){
            const v1 = map1.get(key);
            const v2 = map2.get(key);
            sum += Math.max(v1, v2);
            value += Math.min(v1, v2);
        } else if (map1.has(key)) {
            sum += map1.get(key);
        } else {
            sum += map2.get(key);
        }
    }
  
    return Math.floor(value / sum * 65536);
}