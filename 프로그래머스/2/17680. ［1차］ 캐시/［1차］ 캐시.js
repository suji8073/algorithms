function solution(cacheSize, cities) {
    const HIT = 1; MISS = 5;
    
    var stack  = [];
    var answer = 0;
    
    for (var city of cities) {
        city = city.toLowerCase();
        const index = stack.indexOf(city);
        
        if (index !== -1) {
            stack.splice(stack.indexOf(city), 1);
            stack.push(city);
            answer+= HIT;
            continue;
        } 
        
        answer+= MISS;
        stack.push(city);
        
        if (stack.length > cacheSize) stack = stack.slice(1, cacheSize + 1)
    }

    return answer;
}