const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(n);
const arr = input.map(Number);

const answer = [];

const average = arr.reduce((acc, cur) => acc + cur, 0) / N;
const num = Math.round(average);
answer.push(num === 0 ? 0 : num); // 1

arr.sort((a, b) => a - b);
answer.push(arr[Math.floor(N / 2)]); // 2

const map = new Map();
arr.forEach((num) => map.set(num, map.has(num) ? map.get(num) + 1 : 1));
const max = Math.max(...map.values());

if (max === 1) {
  answer.push(arr.length === 1 ? arr[0] : arr[1]); // 3
} else {
  const result = [];
  for (const [key, value] of map) {
    if (value === max) result.push(key);
  }
  answer.push(result.length === 1 ? result.pop() : result[1]); // 3
}

answer.push(arr[arr.length - 1] - arr[0]); // 4

console.log(answer.join('\n'));
