function solution(id_list, reports, k) {
    const countMap = new Map();
    const reportMap = new Map();
    
    for (const report of new Set(reports)){
        const [a, b] = report.split(' ');
        
        if (!reportMap.has(a)){
            reportMap.set(a, []);
        }
        reportMap.get(a).push(b);
        
        countMap.set(b, countMap.has(b) ? countMap.get(b) + 1 : 1);
    }
    
    const peopleArr = new Set(Array.from(countMap).filter(([_, count]) => count >= k).map(([key]) => key));
    
    return id_list.map((id) => (reportMap.get(id) || []).filter(user => peopleArr.has(user)).length);

}