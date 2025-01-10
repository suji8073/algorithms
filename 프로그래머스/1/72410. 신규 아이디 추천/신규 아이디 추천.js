function solution(new_id) {
    var answer = '';
    
    const regex = /^[a-zA-Z0-9._-]/;
    const upperRegex = /^[A-Z]/;
    [...new_id].map((id) => {
        if (regex.test(id)){
            if (upperRegex.test(id)){
                answer += id.toLowerCase();
            } else answer += id;
        }
    });
    
    answer = answer.replace(/\.{2,}/g, '.');
   
    
    if (answer[0] === '.') answer = answer.slice(1);
    if (answer[answer.length-1] === '.') answer = answer.slice(0, answer.length-1);
    
    if (answer === ''){
        answer += 'a';
    }

    if (answer.length >= 16) answer = answer.slice(0, 15);
    if (answer[answer.length-1] === '.') answer = answer.slice(0, answer.length-1);
   if (answer.length <= 2) answer+= answer[answer.length-1].repeat(3-answer.length)
        

    return answer;
}