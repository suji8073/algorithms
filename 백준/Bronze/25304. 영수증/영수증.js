const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const X = Number(input[0]);
const arr = input.slice(2).map(row => row.split(' ').map(Number));

let result = 0;
for (const [cost, count] of arr){
    result += cost * count;
}

console.log(result === X ? 'Yes' : 'No')