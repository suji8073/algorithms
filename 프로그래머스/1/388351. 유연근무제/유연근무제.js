function calcTime(time){
    const strTime = String(time).padStart(4, '0');
    return Number(strTime.slice(0, 2)) * 60 + Number(strTime.slice(2, 4));
}

function solution(schedules, timelogs, startday) {
    var answer = 0;
    const calcSchedules = schedules.map(schedule => calcTime(schedule));
    let result = 0;
    
    timelogs.forEach((timelog, index) => {
        const target = calcSchedules[index];
        let check = true;
        
        for (let i = 0; i < 7; i++) {
            if (((startday + i) % 7 === 0) || ((startday + i) % 7 === 6)){
                continue;
            }
            
            if (calcTime(timelog[i]) > target + 10){
                check = false;
                break;
            }
        }
        
        if (check) result++;
    })
    
    return result;
}