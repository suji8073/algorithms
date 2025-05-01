const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = Number(input[0]);

const result = [
  '"재귀함수가 뭔가요?"',
  '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.',
  '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.',
  '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."',
];

const last = [
  '"재귀함수가 뭔가요?"',
  '"재귀함수는 자기 자신을 호출하는 함수라네"',
];

console.log('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.');

let count = 1;
dfs(1);
for (let i = count; i > 0; i--) {
  const str = '____'.repeat(i - 1);
  console.log(str.concat('라고 답변하였지.'));
}

function dfs() {
  const str = '____'.repeat(count - 1);

  if (count === N + 1) {
    console.log(last.map((r) => str.concat(r)).join('\n'));
    return;
  }
  console.log(result.map((r) => str.concat(r)).join('\n'));

  count++;
  dfs();
}
