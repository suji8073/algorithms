function solution(picture, k) {
    return picture.flatMap(length => {
        const string = [...length].map(char => char.repeat(k)).join('');
        return Array(k).fill(string);
    })
}