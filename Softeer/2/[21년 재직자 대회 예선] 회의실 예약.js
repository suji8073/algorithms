const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const n = Number(input[0].split(' ')[0]);
const roomNames = input.slice(1, n + 1).sort();

const result = {};
roomNames.forEach((name) => {
  result[name] = new Array(9).fill(true);
});

input.slice(n + 1).forEach((line) => {
  const [name, start, end] = line.split(' ');
  for (let i = +start; i < +end; i++) {
    result[name][i - 9] = false;
  }
});

roomNames.forEach((name, index) => {
  const target = result[name];

  var times = [];
  var start = null;
  for (let i = 0; i < target.length; i++) {
    if (target[i] && start === null) {
      start = i + 9;
    } else if (!target[i] && start !== null) {
      times.push([
        String(start).padStart(2, '0'),
        String(i + 9).padStart(2, '0'),
      ]);
      start = null;
    }
  }

  if (start !== null) times.push([String(start).padStart(2, '0'), 18]);

  console.log(`Room ${name}:`);
  if (times.length === 0) console.log('Not available');
  else {
    console.log(`${times.length} available:`);
    times.map(([start, end]) => console.log(`${start}-${end}`));
  }

  if (index !== roomNames.length - 1) console.log('-----');
});
