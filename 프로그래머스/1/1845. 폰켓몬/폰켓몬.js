function solution(nums) {
    const length = nums.length / 2;
    const array = [...new Set(nums)];
    
    return array.length < length ? array.length : length

}