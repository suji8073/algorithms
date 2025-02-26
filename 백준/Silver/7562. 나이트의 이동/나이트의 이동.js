const fs = require('fs');
const [caseNum, ...input] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const vectors = [
  [-2, 1], [-1, 2], [1, 2], [2, 1],
  [2, -1], [1, -2], [-1, -2], [-2, -1],
];

for (let i = 0; i < Number(caseNum); i++) {
  const [[n], start, end] = input
    .slice(i * 3, i * 3 + 3) // ✅ 특정 인덱스에서 3줄씩 가져오기
    .map((row) => row.split(' ').map(Number));

  const visited = Array.from({ length: n }, () => Array(n).fill(false));

  function bfs() {
    const queue = [[start[0], start[1], 0]];
    visited[start[0]][start[1]] = true;

    while (queue.length > 0) { // ✅ shift() 사용
      const [qx, qy, qCount] = queue.shift();

      if (qx === end[0] && qy === end[1]) {
        return qCount;
      }

      for (const [dx, dy] of vectors) {
        const px = qx + dx;
        const py = qy + dy;

        if (px >= 0 && px < n && py >= 0 && py < n && !visited[px][py]) {
          visited[px][py] = true;
          queue.push([px, py, qCount + 1]);
        }
      }
    }
    return 0;
  }

  console.log(bfs());
}
