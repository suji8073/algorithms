function solution(rank, attendance) {
    var array = [];
    
    for (let i = 0; i < rank.length; i++) {
        array.push([rank[i], i, attendance[i]]);
    }
    
    array = array.sort((a, b) => a[0] - b[0]).filter(c => c[2]);
    
    return 10000 * array[0][1] + 100 * array[1][1] + array[2][1];
}