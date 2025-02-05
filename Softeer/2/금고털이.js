const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [W, N] = input[0].split(' ').map(Number);
const array = input.slice(1).map((row) => row.split(' ').map(Number));

let weight = W;
array.sort((a, b) => b[1] - a[1]);

let price = 0;
for (let i = 0; i < N; i++) {
  if (weight === 0) break;
  const [M, P] = array[i];

  if (weight < M) {
    price += weight * P;
    break;
  }

  price += M * P;
  weight -= M;
}

console.log(price);
