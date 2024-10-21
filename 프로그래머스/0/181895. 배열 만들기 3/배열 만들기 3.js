function solution(arr, intervals) {
    return intervals.map((intervals) => arr.slice(intervals[0], intervals[1] + 1)).flat();
}