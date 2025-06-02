const fs = require('fs');
const stdin = fs.readFileSync(0).toString().trim();

const stack = [];
let temp = [];
let inTag = false;

for (let i = 0; i < stdin.length; i++){
    const char = stdin[i];

    if (char === '<'){
        stack.push(temp.reverse().join(''));
        temp = [];
        inTag = true;
        temp.push(char);
        continue;
    }

    if (char === '>'){
        inTag = false;
        temp.push(char);
        stack.push(temp.join(''));
        temp = [];
        continue;
    }

    if (inTag){
        temp.push(char);
        continue;
    }

    if (char === ' '){
        stack.push(temp.reverse().join(''));
        temp = [];
        stack.push(' ');
    } else temp.push(char)
}

if (temp.length > 0) stack.push(temp.reverse().join(''));

console.log(stack.join(''));

