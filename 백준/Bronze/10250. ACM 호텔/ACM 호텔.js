const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

for (let i = 0; i < Number(n); i++) {
  const [H, W, N] = input[i].split(' ').map(Number);

  const x = N % H === 0 ? H : N % H;
  const y = Math.ceil(N / H);

  console.log(
    Number(String(x).padStart(String(H).length, 0) + String(y).padStart(2, 0))
  );
}
