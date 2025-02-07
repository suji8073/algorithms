const fs = require('fs');
let inputFile = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const n = Number(inputFile[0]);
const arr = inputFile[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const m = Number(inputFile[2]);
const targetArr = inputFile[3].split(' ').map(Number);

const result = targetArr.map(arr => binarySearch(arr)).join('\n');
console.log(result)

function binarySearch(num) {
    let left = 0;
    let right = n-1;
    
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === num){
            return 1;
        }
        
        if (arr[mid] > num) right = mid - 1;
        else left = mid + 1;
    }
    return 0;
}

