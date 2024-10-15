function solution(n, m, section) {
    
    let answer = 0;
    
    let count = section[0];

    while(count <= section[section.length-1]){
        if (section.includes(count)){
            count += m;
            answer++;
        } else {
            count++;
        }

    }
    
    return answer;
}
