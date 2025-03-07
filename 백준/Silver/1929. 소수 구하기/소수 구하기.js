const fs = require('fs');
const [M, N] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

for (let i = M; i <= N; i++) {
  solution(i);
}

function solution(num) {
  if (num === 1) return;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return;
    }
  }
  console.log(num);
}
