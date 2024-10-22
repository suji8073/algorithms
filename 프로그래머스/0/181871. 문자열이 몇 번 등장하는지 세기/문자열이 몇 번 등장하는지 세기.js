function solution(myString, pat) {
    var count = 0;
    for (var i = 0; i < myString.length - pat.length + 1; i++) {
        if (myString.slice(i, i+pat.length) === pat) count ++;
    }
    return count;
}