function solution(my_string, indices) {
    const array = [...my_string];
    indices.map((num) => array[num] = '');
    return array.join('');
}