const fs = require('fs');
const str = fs.readFileSync('/dev/stdin', 'utf-8').trim();

const schools = new Map([
  ['NLCS', 'North London Collegiate School'],
  ['BHA', 'Branksome Hall Asia'],
  ['KIS', 'Korea International School'],
  ['SJA', 'St. Johnsbury Academy'],
]);

console.log(schools.get(str));
