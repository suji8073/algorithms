function solution(genres, plays) {
    const map = new Map();
    for (let i = 0; i < genres.length; i++){
        const type = genres[i];
        if (map.has(type)) {
            const value = map.get(type);
           map.set(type, { arr: [...value.arr, [i, plays[i]]], sum: value.sum + plays[i]});
        } else {
            map.set(type, { arr: [[i, plays[i]]], sum: plays[i]});
        }
    }
    
    const sumMap = [];
    
    for (const [key, value] of map){
        value.arr.sort((a, b) => b[1] - a[1]);
        sumMap.push([key, value.sum]);
    }
    
    sumMap.sort((a, b) => b[1]  - a[1]);
    
    const result = [];
    for (const [type, _] of sumMap){
        for (const [index, _] of map.get(type).arr.slice(0, 2)){
            result.push(index)
        }
    }
    
    return result;
}