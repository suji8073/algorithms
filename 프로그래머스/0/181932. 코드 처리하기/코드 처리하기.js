function solution(code) {
    var answer = '';
    let mode = 0;
    
    [...code].map((char, i)=> {
        if (mode === 0){
            if (char === '1'){
                mode = 1;
            } else {
                answer += (i%2===0 ? code[i] : '')
            }
        } else {
            if (char === '1'){
                mode = 0;
            } else {
                answer += (i%2===0 ? '': code[i])
            }  
        }
       
    })
    
    if (answer.length === 0) return "EMPTY";
    return answer;
}