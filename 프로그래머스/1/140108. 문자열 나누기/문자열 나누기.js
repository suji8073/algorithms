function solution(s) {
    let letter = '';
    let count = [];
    let answer = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (letter === ''){
            letter = s[i];
            count = [1, 0];
            answer++;
            continue;
        }

        if (s[i] === letter) {
            count[0]++;
            continue;
        }

        count[1]++;
        
        if (count[0] === count[1]) {
            letter = '';
        }

    }

    return answer;
}