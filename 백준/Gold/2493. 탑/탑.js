const fs = require('fs');
const stdin = fs.readFileSync(0).toString().trim();
const input = stdin.split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const stack = [];
const result = [];

for (let i = 0; i < n; i++) {
    const target = arr[i];

    while(stack.length && stack[stack.length -1][0] < target){
        stack.pop();
    }

    result.push(stack.length === 0 ? 0 : stack[stack.length -1][1] + 1);
    stack.push([target, i]);
}

console.log(result.join(' '));
