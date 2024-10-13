function solution(name, yearning, photos) {
    var answer = [];
    photos.map((photo) => {
        var count = 0;
        for (var i=0; i<photo.length; i++){
            const index = name.indexOf(photo[i]);
            count += (index === -1 ? 0 : yearning[index]);
        }
        answer.push(count)
    })
    return answer;
}