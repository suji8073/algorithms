const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

const [a, b, c] = input.split(' ').map(Number);

if (a === b && b === c){
    console.log(10000 + a * 1000);
    return;
}

if (a === b || b === c || a === c){
    let num = 0;
    if (a === b || a === c) num = a;
    else num = b;
    
    console.log(1000 + num * 100);
    return;
}

console.log(100 * Math.max(a, b, c));