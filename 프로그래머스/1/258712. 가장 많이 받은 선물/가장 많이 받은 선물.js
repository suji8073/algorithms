function solution(friends, gifts) {
    var answer = 0;
    const map = new Map(friends.map(friend => [friend, {...Object.fromEntries(friends.map(name => [name, 0])), count: 0}]));
    
    for (const gift of gifts){
        const [people1, people2] = gift.split(' ');
        const target = map.get(people1);
        map.get(people1)[people2]++;
        map.get(people1)['count']++;
        map.get(people2)['count']--;
    }
    const checkMap = new Map(friends.map(friend => [friend, 0]));
    
    for (let i = 0; i < friends.length - 1; i++) {
        const target = map.get(friends[i]);
        
        for (let j = i + 1; j < friends.length; j++) {
            const other = map.get(friends[j]);
            
            const num1 = target[friends[j]];
            const num2 = other[friends[i]];
            
            if (num1 === num2) {
                if (target['count'] > other['count']) checkMap.set(friends[i], checkMap.get(friends[i]) + 1)
                else if (target['count'] < other['count']) checkMap.set(friends[j], checkMap.get(friends[j]) + 1)
                continue;
            }
            
            if (num1 > num2) checkMap.set(friends[i], checkMap.get(friends[i]) + 1)
            else checkMap.set(friends[j], checkMap.get(friends[j]) + 1)
        }
    }
    

    return Math.max(...checkMap.values());
}