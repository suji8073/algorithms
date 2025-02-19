const fs = require('fs');
const [n, input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const MOD = 1234567891;
const arr = input.split('').map((char) => char.charCodeAt() - 97 + 1);

let sum = 0;
let power = 1; 

for (let i = 0; i < Number(n); i++) {
  sum = (sum + (arr[i] * power) % MOD) % MOD;
  power = (power * 31) % MOD;
}

console.log(sum);
