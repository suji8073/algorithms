function solution(friends, gifts) {
    const map = new Map();
    const checkMap = new Map();
    
    const initialObject = Object.fromEntries(friends.map(name => [name, 0]));
    
    friends.forEach(friend => {
        map.set(friend, {...initialObject, count: 0});
        checkMap.set(friend, 0)
    });
    
    for (const gift of gifts){
        const [people1, people2] = gift.split(' ');
        const target = map.get(people1);
        
        target[people2]++;
        target['count']++;
        map.get(people2)['count']--;
    }
    
    for (let i = 0; i < friends.length - 1; i++) {
        const target = map.get(friends[i]);
        
        for (let j = i + 1; j < friends.length; j++) {
            const other = map.get(friends[j]);
            const num1 = target[friends[j]];
            const num2 = other[friends[i]];
            
            if (num1 !== num2) {
                const winner = num1 > num2 ? friends[i] : friends[j];
                checkMap.set(winner, checkMap.get(winner) + 1);
                continue;
            }
            
            if (target['count'] === other['count']) continue;
            
            const winner = target['count'] > other['count'] ? friends[i] : friends[j];
            checkMap.set(winner, checkMap.get(winner) + 1);
        }
    }
    

    return Math.max(...checkMap.values());
}