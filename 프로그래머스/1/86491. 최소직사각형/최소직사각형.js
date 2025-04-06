function solution(sizes) {
    let x = 0;
    let h = 0;
    
    sizes.forEach((row, index) => {
        const size = row.sort((a, b) => a - b);
        if (index === 0){
            x = size[0];
            h = size[1];
        } else {
            x = Math.max(x, size[0]);
            h = Math.max(h, size[1]);
        }
    });
    
    return x * h;
}
