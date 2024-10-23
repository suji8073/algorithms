function solution(myString, pat) {
//     const array = myString.split(pat);
    
//     const count = array.reduce((acc, cur, i) => {
//         if (i !== array.length - 1){
//             return acc + cur.length + (i !== 0 ? 1 : 0);
//         }
//         return acc;
//     }, 0);

//     return myString.slice(0, count) + pat;
    
    return myString.slice(0, myString.lastIndexOf(pat)) + pat;
}