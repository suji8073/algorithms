const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(row => row.split(' ').map(Number));

let box = Array.from({length: N + 1}, (_, i) => i);
for (const [i, j] of arr) {
    box = [...box.slice(0, i), ...box.slice(i, j + 1).reverse(), ...box.slice(j + 1)]
}

console.log(box.slice(1).join(' '));