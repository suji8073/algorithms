function solution(people, limit) {
    people.sort((a, b) => a - b);
    
    let left = 0;
    let right = people.length - 1;
    let count = 0;
    while (left <= right) {
        if (left === right){
            count++;
            break;
        }
        const min = people[left];
        const max = people[right];
        
        if (max + min > limit){
            right--;
        } else {
            right--;
            left++;
        }
        count++;
    }

    return count;
}