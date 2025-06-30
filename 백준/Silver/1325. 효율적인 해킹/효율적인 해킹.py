# code
import sys

input = sys.stdin.read().strip().split('\n')
N,M = map(int, input[0].split())
com = list(map(lambda x: list(map(int, x.split())), input[1:]))

v = [[] for _ in range(N + 1)]
for a,b in com:
    v[b].append(a) 

def dfs(x):
    visited = [0] * (N + 1)
    visited[x] = 1
    stack = [x]
    while stack:
        c = stack.pop()
        for c_ in v[c]:
            if not visited[c_]:
                visited[c_] = 1
                stack.append(c_)
    return sum(visited)
        
answer = []
for i in range(1, len(v)):
    answer.append(dfs(i))

max_ = max(answer)
for i in range(len(v) - 1):
    if answer[i] == max_:
        print(i + 1, end = ' ')