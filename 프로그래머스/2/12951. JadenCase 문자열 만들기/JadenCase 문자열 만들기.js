function solution(s) {
    return s.toLowerCase().split(' ').map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(' ');
}