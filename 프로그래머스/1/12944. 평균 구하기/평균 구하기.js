function solution(arr) {
    return arr.reduce((prev, cue) => prev + cue, 0) / arr.length;
}