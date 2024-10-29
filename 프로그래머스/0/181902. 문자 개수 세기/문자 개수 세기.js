function solution(my_string) {
    const result = Array.from({length: 52}).fill(0);
    
    for (str of my_string){
        const strNum = str.charCodeAt();
        if (strNum <= 90) {
            result[strNum - 65]++;
        } else {
            result[strNum - 71]++;
        }
    }
    
    return result;
}