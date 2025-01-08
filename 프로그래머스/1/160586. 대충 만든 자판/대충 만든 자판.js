function solution(keymap, targets) {
    var answer = [];
    
    for (const [...string] of targets) {
        let sum = 0;
        
        for (let k = 0; k < string.length; k++){
            let check = 999;
            for (let i = 0; i < keymap.length; i++) {
                const num = keymap[i].indexOf(string[k]);
                if (num !== -1 && check > num){
                    check = num;
                }
            }
            
            if (check === 999){
                sum = 0;
                break;
            } 
            sum += (check + 1);
        }

        answer.push(sum === 0 ? -1 : sum);
       
    }
    return answer;
}