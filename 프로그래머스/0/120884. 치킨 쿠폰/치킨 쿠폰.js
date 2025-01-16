function solution(chicken) {
    var answer = 0;
    
    while(true) {
        const coupon = chicken % 10;
        chicken = Math.floor(chicken / 10);
       
        answer += chicken;
        chicken+= coupon;
     
        if (chicken < 10) break;
        
    }
    return answer;
}