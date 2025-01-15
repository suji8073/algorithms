function solution(id_list, reports, k) {
    const countMap = new Map();
    const reportMap = new Map();
    
    for (const report of reports){
        const [a, b] = report.split(' ');
        
        if (reportMap.has(a)){
            const array = reportMap.get(a);
            if (!array.includes(b)){
                reportMap.set(a, [...array, b]);
                countMap.set(b, countMap.has(b) ? countMap.get(b) + 1 : 1);
            }
        } else {
            reportMap.set(a, [b]);
            countMap.set(b, countMap.has(b) ? countMap.get(b) + 1 : 1);
        }
    }

 
    let peopleArr = [];
    Array.from(countMap).forEach(([key, value]) => { if (value >= k) peopleArr.push(key)});
    
    if (peopleArr.length === 0){
        return Array(id_list.length).fill(0);
    }
    
    const idMap = new Map();
    id_list.forEach((id) => idMap.set(id, 0));
    
    for ([key, value] of reportMap){
        const len = value.filter((v) => peopleArr.includes(v)).length;
        idMap.set(key, idMap.get(key) + len);
    }
 
    return [...idMap.values()];
}