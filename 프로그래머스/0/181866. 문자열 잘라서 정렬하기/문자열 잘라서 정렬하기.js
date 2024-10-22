function solution(myString) {
    return myString.split('x').filter(str => str.trim() !== "").sort();
}