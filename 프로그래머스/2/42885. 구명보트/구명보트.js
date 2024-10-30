function solution(people, limit) {
    var count = 0;
    
    people.sort((a, b) => b - a);
    
    var firstIndex = 0;
    var lastIndex = people.length -1;
    
    while(lastIndex >= firstIndex) {
        if (people[firstIndex] + people [lastIndex] > limit) {
            firstIndex++;
            count++;
        } else {
            firstIndex++;
            lastIndex--;
            count++;
        }
    }

    return count;
}