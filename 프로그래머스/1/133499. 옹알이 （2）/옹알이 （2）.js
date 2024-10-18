function solution(babbling) {
    const array = ['aya', 'ye', 'woo', 'ma'];
    var answer = 0;
    
    babbling.forEach((bab) => {
        var string = bab;
        var lastIndex = -1;
        while(1) {
            
            const targetIndex = array.findIndex((a) => string.startsWith(a));
            console.log(string, targetIndex)

            if (targetIndex === -1 || lastIndex === targetIndex) {
               break;
            }
            
            string = string.replace(array[targetIndex], '');
            lastIndex = targetIndex;
             console.log(string)
            if (string === ''){
                answer ++;
                break;
            }
        }
            
    })

    return answer;
}