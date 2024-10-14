function solution(myString, pat) {
    const changeArray = [...myString].map((string)=> string === 'A' ? 'B' : 'A').join('')
    return changeArray.includes(pat) ? 1 : 0;
}