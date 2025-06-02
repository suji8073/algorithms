const fs = require('fs');
const stdin = fs.readFileSync(0).toString().trim();
const input = stdin.split('\n');

const [N, M] = input[0].split(' ').map(Number);
const hash = new Map();

for (const str of input.slice(1)){
    if (str.length < M) continue;
    const value = hash.has(str) ? hash.get(str) + 1 : 1;
    hash.set(str, value);
}

const result = Array.from(hash.entries()).sort((a, b) => {
    if (a[1] === b[1]) {
        if (a[0].length === b[0].length) return b[0] > a[0] ? -1 : 1;
        return b[0].length - a[0].length;
    }
    return b[1] - a[1];
});

console.log(result.map(r => r[0]).join('\n'))
