const fs = require('fs');
const str = fs.readFileSync('/dev/stdin', 'utf-8').trim().replaceAll(' ', '');

if (str === '12345678') {
  console.log('ascending');
} else if (str === '87654321') {
  console.log('descending');
} else {
  console.log('mixed');
}
