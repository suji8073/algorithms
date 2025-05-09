function solution(files) {
    return files.sort((a, b) => {
        const [h1, n1] = getSplitText(a);
        const [h2, n2] = getSplitText(b);
        
        if (h1 !== h2) return h1 > h2 ? 1 : -1;
        if (n1 !== n2) return n1 - n2;
        
        return 0;
    });
}

function getSplitText(str){
    let index = 0;
    let lastIndex = str.length;
    
    for (let i = 0; i < str.length; i++){
         if (index === 0 && !isNaN(str[i]) && str[i] !== ' ') {
          index = i;
        }

        if (index !== 0 && (isNaN(str[i]) || str[i] === ' ')) {
          lastIndex = i;
          break;
        }
    }
    
    return [str.slice(0, index).toLowerCase(), Number(str.slice(index, lastIndex))];
}