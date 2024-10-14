function solution(myString) {
    return [...myString].reduce((prev, string) => prev + (string.charCodeAt() > 108 ? string : 'l'), '');
}