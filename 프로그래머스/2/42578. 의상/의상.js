function solution(clothes) {
    var hashMap = new Map();
    
    for (let i = 0; i < clothes.length; i++) {
        const type = clothes[i][1];
        if (!hashMap.get(type)) hashMap.set(type, 1);
        else hashMap.set(type,hashMap.get(type) + 1)
    }
    
    return [...hashMap.values()].reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}