function solution(players, callings) {
    const map = new Map();
    players.forEach((player, index) => map.set(player, index));
    
    for (const call of callings){
        const index = map.get(call);
        
        if (index > 0) {
            const prevPlayer = players[index-1];
            [players[index-1], players[index]] =  [players[index], players[index-1]];
            
            map.set(call, index-1);
            map.set(prevPlayer, index);
        }
    }
    
    return players;
}