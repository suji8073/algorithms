function solution(dots) {
    const widthArr = [...new Set(dots.map(d => d[0]))];
    const heightArr = [...new Set(dots.map(d => d[1]))];

    return Math.abs(widthArr[0] - widthArr[1]) * Math.abs(heightArr[0] - heightArr[1]);
}