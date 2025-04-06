function solution(sizes) {
    let x = 0;
    let h = 0;
    
    sizes.forEach((row) => {
        const size = row.sort((a, b) => a - b);
        x = Math.max(x, size[0]);
        h = Math.max(h, size[1]);
    });
    
    return x * h;
}
