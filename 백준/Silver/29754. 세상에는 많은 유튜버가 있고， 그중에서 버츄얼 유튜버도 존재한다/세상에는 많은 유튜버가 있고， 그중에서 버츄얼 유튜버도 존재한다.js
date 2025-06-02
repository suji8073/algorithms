const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();
const input = stdin.split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + N).map(row => row.split(' '));

const map = new Map();
for (const [name, day, time1, time2] of arr){
    const time = getTime(time1, time2);
    const week = Math.floor((day - 1) / 7);

    if (!map.has(name)){
        const visited = Array.from({length: M / 7}, () => ({dayArr: [], totalTime: 0}));
        visited[week].dayArr.push(day);
        visited[week].totalTime += time;
        map.set(name, visited);
        continue;
    }

    const value = map.get(name);
    value[week].dayArr.push(day);
    value[week].totalTime += time;
}

const result = [];
for (const [key, value] of map){
    let check = true;
    for (let i = 0; i < value.length; i++){
        const {dayArr, totalTime} = value[i];
        if (dayArr.length < 5 || totalTime < 3600){
            check = false;
            break;
        }
    }
    if (check) result.push(key);
}

console.log(result.length === 0 ? -1 : result.sort().join('\n'))

function getTime(t1, t2){
    const [h1, m1] = t1.split(':').map(Number);
    const [h2, m2] = t2.split(':').map(Number);

    return (h2 * 60 + m2) - (h1 * 60 + m1);
}