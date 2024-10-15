function solution(n) {
    return String(n).split('').map(Number).reduce((prev, cue) => prev + cue);
}