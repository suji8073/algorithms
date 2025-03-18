const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const arr = inputFile[1].split(' ').map(Number);
const testCase = inputFile.slice(2).map((row) => row.split(' ').map(Number));

const answer = [];
arr.forEach((num, i) => {
  answer.push(i === 0 ? num : answer[i - 1] + num);
});

const result = [];
testCase.map(([a, b]) => {
  result.push(a === 1 ? answer[b - 1] : answer[b - 1] - answer[a - 2]);
});

console.log(result.join('\n'));
