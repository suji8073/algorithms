function solution(num_list) {
    let num1 = 0;
    let num2 = 0;
    
    num_list.map((num, index)=> {
       if (index % 2 === 0){
           num1 += num;
       } else {
           num2 += num;
       }
    })
;
    return Math.max(num1, num2);
}