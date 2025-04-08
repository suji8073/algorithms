function solution(name) {
    let sum = 0;
    for (const char of [...name]) {
        const num = char.charCodeAt();
        sum += Math.min(num - 65, 90 - num + 1)
    }

    if (![...name].includes('A')){
        return sum + name.length - 1;
    }
    
    console.log(name)
    let result = name.length - 1;
    for (let i = 0; i < name.length; i++){
        let next = i + 1;
        while(next < name.length && name[next] === 'A'){
            next++;
        }
        const move = i + i + name.length - next;
        result = Math.min(move, result, i + (name.length - next) * 2)
    }
    
    return result + sum;
}

