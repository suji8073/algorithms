function solution(a, b) {
    const array = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const week = ["FRI","SAT", "SUN","MON","TUE","WED","THU"];
    

    const num = array.slice(0, a - 1).reduce((acc, cur) => acc + cur,  b - 1);
        console.log(array.slice(0, a-1), num, week.at(-1))
    return week.at(num % 7);
}