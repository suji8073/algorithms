function solution(s, skip, index) {
    var answer = '';
    const array = [...skip].sort().map(c => c.charCodeAt());
    
    for (char of s) {
        let resultChar = char.charCodeAt();
        
        for (let i = 1; i <= index; i++) {
            resultChar++;
            if (resultChar > 122) resultChar -= 26;
            
            while(array.includes(resultChar)){
                resultChar++;
                if (resultChar > 122) resultChar -= 26;
            }
            
        }

        answer += String.fromCharCode(resultChar);
        
    }

    return answer;
}