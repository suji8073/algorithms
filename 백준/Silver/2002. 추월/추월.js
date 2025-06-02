const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();
const input = stdin.split('\n');

const N = Number(input[0]);
const inArr = input.slice(1, 1 + N);
const outArr = input.slice(1 + N);

const checking = Array(N).fill(false);

let answer = 0;
for (const name of outArr){
    let check = false;
    for (let i = 0; i < N; i++){
        if (checking[i]) continue;

        if (inArr[i] === name){
            checking[i] = true;
            break;
        }
        check = true;
    }
    if (check) answer++;
}

console.log(answer);