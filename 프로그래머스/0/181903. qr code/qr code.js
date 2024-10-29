function solution(q, r, code) {
    return [...code].filter((c, i) => {
        if (i % q === r) return true;
        return false;
    }).join('')
}