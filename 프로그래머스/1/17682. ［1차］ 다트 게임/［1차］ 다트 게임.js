function solution(dartResult) {
    const dartArray = [...dartResult];
    const array = ['S', 'D', 'T'];
    
    var answer = [];
    
    let result = 0;
    let index = 0;
    for (let i = 0; i < dartArray.length; i++) {
        if (!isNaN(dartArray[i])) {
            if (isNaN(dartArray[i-1])){
                answer.push(result);
                result = Number(dartArray[i]);
            } else {
                result = Number(result + dartArray[i]);
            }
          
        } else if (array.includes(dartArray[i])){
            const findIndex = array.findIndex(a => a === dartArray[i]);
            result = result**(findIndex+1);
        } else if (dartArray[i] === '*') {
            answer[answer.length-1] *= 2;
            result *= 2;
        } else if (dartArray[i] === '#'){
            result *= -1;
        }
        if (i === dartArray.length -1){
             answer.push(result);
        }
        
    }
    console.log(answer)

    return answer.reduce((acc, cur) => acc + cur, 0);
}