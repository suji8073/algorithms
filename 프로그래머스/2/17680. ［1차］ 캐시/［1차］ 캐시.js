function solution(cacheSize, cities) {
    var stack  = [];
    var answer = 0;
    
    for (var city of cities) {
        city = city.toLowerCase();
        if (stack.includes(city)) {
            stack.splice(stack.indexOf(city), 1);
            stack.push(city);
            answer+= 1;
            continue;
        }
        
        answer+= 5;
        stack.push(city);

        if (stack.length > cacheSize) {
            stack = stack.slice(1, cacheSize + 1);
            continue;
        }
    }

    return answer;
}