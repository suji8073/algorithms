const fs = require('fs');
const inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const arr = inputFile.slice(1).map((row) => row.split(' '));

arr.forEach((row, i) => row.push(i));
arr.sort((a, b) => Number(a[0]) - Number(b[0]) || a[2] - b[2]);

arr.forEach((row) => console.log(row[0] + ' ' + row[1]));
