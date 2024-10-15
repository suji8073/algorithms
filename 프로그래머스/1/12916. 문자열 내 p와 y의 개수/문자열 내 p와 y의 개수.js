function solution(s){
    const array = [...s.toLowerCase()];
    
    const pCount = array.filter((char) => char === 'p').length;
    const yCount = array.filter((char) => char === 'y').length;
  

    return pCount === yCount ;
}