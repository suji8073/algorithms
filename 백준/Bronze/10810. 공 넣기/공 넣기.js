const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(row => row.split(' ').map(Number));

const box = Array(N+1).fill(0);
for (const [i, j, k] of arr){
    for (let s = i; s <= j; s++){
        box[s] = k;
    }
}

console.log(box.slice(1).join(' '))