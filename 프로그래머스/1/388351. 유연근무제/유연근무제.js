function calcTime(time) {
    const strTime = String(time).padStart(4, '0');
    return Number(strTime.slice(0, 2)) * 60 + Number(strTime.slice(2, 4));
}

function solution(schedules, timeLogs, startday) {
    var answer = 0;
    
    // 각 직원의 희망 출근 시간을 분 단위로 변환
    const calcSchedules = schedules.map(schedule => calcTime(schedule));
    let result = 0;
    
    // 각 직원별로 체크
    timeLogs.forEach((timelog, index) => {
        const target = calcSchedules[index];  // 해당 직원의 희망 출근 시간 (분)
        let check = true;
        
        // 일주일간 체크 (7일)
        for (let i = 0; i < 7; i++) {
            // 토요일(6) 또는 일요일(0)인 경우 건너뛰기
            if (((startday + i) % 7 === 0) || ((startday + i) % 7 === 6)) {
                continue;
            }
            
            // 해당 날짜의 출근 시간이 희망 시간 + 10분을 초과하는지 체크
            if (calcTime(timelog[i]) > target + 10) {
                check = false;
                break;
            }
        }
        
        // 일주일간 모든 평일에 시간을 지킨 경우
        if (check) {
            result++;
        }
    });
    
    return result;
}