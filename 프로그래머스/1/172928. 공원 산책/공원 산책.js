function solution(park, routes) {
    const opArr = {
        'N': [-1, 0],
        'S': [1, 0],
        'W': [0, -1],
        'E': [0, 1]
    };
    
    var boards = [];
    var result = [0,0];
    
    park.forEach((p, i) => {
        const array = p.split('');
        boards.push(array);
        if (p.includes('S')) {
            result = [i, array.findIndex((a) => a === 'S')];
        }
    });
    

    for (const route of routes) {
        let index = result;
        const [op, n] = route.split(' ');
        const routeIndex = opArr[op];
        


        for (let i = 0; i < n; i++) {
            const x = index[0] + routeIndex[0];
            const y = index[1] + routeIndex[1];
            
            if (x > boards.length - 1 || y > boards[0].length - 1 || x < 0 || y < 0 || boards[x][y] === 'X' ) {
                index = result;
                break;
            }
            index = [x, y]
        }
        
         result = index;
    }
    
    return result;
}