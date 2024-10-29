function solution(n, slicer, num_list) {
    if (n === 1) return num_list.slice(0, slicer[1]+1);
    if (n === 2) return num_list.slice(slicer[0]);
    if (n === 3) return num_list.slice(slicer[0], slicer[1]+1);
    if (n === 4) return num_list.filter((num, i) => {
        if (i >= slicer[0] && i<=slicer[1] && (i + slicer[0]) % slicer[2] === 0) return true;
        return false;
    })

}