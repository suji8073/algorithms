function solution(name, yearning, photos) {
    const object = Object.fromEntries(name.map((key, index) => [key, yearning[index]]));
   
    return photos.map((photo) => {
        var result = 0;
        photo.forEach((p, i) => {
            if (object[p]) {
                result += object[p];
            }
        })
        return result;
    })
}