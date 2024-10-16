function solution(s) {
    const helf = s.length / 2;
    return Number.isInteger(helf) ? s.slice(helf-1, helf+1) : s[Math.round(helf) - 1];
}