function solution(num_list) {
    var odd = "";
    var even = "";
    
    num_list.map(num => num % 2 === 0 ? even += num : odd += num);
    
    return Number(odd) + Number(even);
}