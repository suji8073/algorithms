function solution(wallpaper) {
    var xArr = [];
    var yArr = [];
    
    for (let i = 0; i < wallpaper.length; i++){
        for (let j = 0; j < wallpaper[0].length; j++){
            if (wallpaper[i][j] === '#'){
                xArr.push(i);
                yArr.push(j)
            }
        }
    }
    
    xArr.sort((a, b) => a - b);
    yArr.sort((a, b) => a - b);

    
    return [xArr[0], yArr[0], xArr[xArr.length -1] + 1, yArr[yArr.length-1] + 1];
}