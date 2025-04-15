function solution(name) {
    const arr = [...name];
    const len = arr.length;
    
    const result = arr.reduce((acc, cur) => acc + getCount(cur), 0);
    
    if (!arr.includes('A')){
        return result + len - 1;
    }
    
    let min = len - 1;
    
    for (let i = 0; i < len; i++) {
        let index = i + 1;
        while (index < name.length && arr[index] === 'A'){
            index++;
        }
     
        const path1 = i + (len - index) * 2;
        const path2 = i + i + len - index;
        min = Math.min(min, path1, path2);
    }
    return result + min;
}

function getCount(char){
    const num = char.charCodeAt();
    return Math.min(90 - num + 1, num - 65);
}

