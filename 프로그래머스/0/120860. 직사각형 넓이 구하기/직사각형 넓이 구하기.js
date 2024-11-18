function solution(dots) {
    const widthArray = [...new Set([dots[0][0], dots[1][0], dots[2][0], dots[3][0]])];
    const heightArray = [...new Set([dots[0][1], dots[1][1], dots[2][1], dots[3][1]])];

    return Math.abs(widthArray[0] - widthArray[1]) * Math.abs(heightArray[0] - heightArray[1]);
}