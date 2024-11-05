function solution(spell, dic) {
    spell = spell.sort().join('');
    
    for (let i = 0; i < dic.length; i++) {
        const str = [...dic[i]].sort().join('');
        if (spell === str) {
            return 1;
        }
    }
    return 2;
}