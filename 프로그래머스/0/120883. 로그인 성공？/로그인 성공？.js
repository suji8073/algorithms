function solution(id_pw, db) {
    const index = db.findIndex(data => data[0] === id_pw[0]);
    if (index === -1) return "fail";

    return db[index][1] === id_pw[1] ? 'login' : 'wrong pw';
}