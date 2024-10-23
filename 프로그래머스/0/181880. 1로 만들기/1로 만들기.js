function solution(num_list) {
    return num_list.reduce((acc, cur) => {
        var index = 0;
        while (cur !== 1) {
            if (cur % 2 === 0) cur /= 2;
            else cur = (cur - 1) / 2;
            index ++;
        }
        return acc + index;
    }, 0);
}