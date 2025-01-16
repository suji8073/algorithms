function solution(numlist, n) {
    const array = numlist.map((num) => ({dist : Math.abs(num - n), num}));
    array.sort((a, b) => a.dist - b.dist);
    
    const result = Array(array.length).fill(0);
    for (let i = 0; i < array.length; i++){
        if (i < array.length -1 && array[i].dist === array[i+1].dist){
            result[i] = Math.max(array[i].num, array[i+1].num);
            result[i+1] = Math.min(array[i].num, array[i+1].num);
            i++;
        } else {
            result[i] = array[i].num;
        }
    }

    return result;
}