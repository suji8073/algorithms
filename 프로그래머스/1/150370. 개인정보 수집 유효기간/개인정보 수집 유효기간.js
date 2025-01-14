function solution(today, terms, privacies) {
    var dateMap = new Map();
    for (const term of terms) {
        const [type, month] = term.split(' ');
        dateMap.set(type, month)
    }
    
    var answer = [];
    for (let i = 0; i < privacies.length; i++) {
        const [dateStr, term] = privacies[i].split(' ');
        
        const date = new Date(dateStr);
        date.setMonth(date.getMonth() + Number(dateMap.get(term)));
        
        if (new Date(today) >= date) {
            answer.push(i+1)
        }
    }
    return answer;
}