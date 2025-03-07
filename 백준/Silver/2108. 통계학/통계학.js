const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(n);
const arr = input.map(Number);

if (N === 1) {
  for (let i = 0; i < 3; i++) console.log(arr[0]);
  console.log(0);
  return;
}

const average = arr.reduce((acc, cur) => acc + cur, 0) / N;
const arr1 = String(average).split('.');

if (arr1.length === 1) {
  console.log(average); // 1
} else {
  const check = average >= 0 ? 1 : -1;
  const num = Math.round(Math.abs(Number(arr1[0])) + Number(arr1[1][0]) / 10);
  console.log(num === 0 ? 0 : num * check); // 1
}

arr.sort((a, b) => a - b);
console.log(arr[Math.floor(N / 2)]); // 2

const map = new Map();
arr.forEach((num) => map.set(num, map.has(num) ? map.get(num) + 1 : 1));
const max = Math.max(...map.values());

if (max === 1) {
  console.log(arr[1]); // 3
} else {
  const result = [];
  for (const [key, value] of map) {
    if (value === max) {
      result.push(key);
    }
  }
  console.log(result.length === 1 ? result.pop() : result[1]); // 3
}

console.log(arr[arr.length - 1] - arr[0]); // 4
