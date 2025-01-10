function solution(new_id) {
    // 1단계 
    var answer = new_id.toLowerCase();
    
    // 2단계
    answer = answer.replace(/[^a-z0-9._-]/g, '');
    
    // 3단계
    answer = answer.replace(/\.{2,}/g, '.')
    
    // 4단계
    answer = answer.replace(/^\.|\.$/g, '')
    
    // 5단계
    if (answer === '') answer = 'a';
    
    // 6단계
    if (answer.length >= 16) answer = answer.slice(0, 15).replace(/\.$/g, '');
    
    // 7단계
    if (answer.length <= 2) answer = answer.padEnd(3 , answer[answer.length - 1])

    return answer;
}