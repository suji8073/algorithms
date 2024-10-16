// function solution(s) {
//     const arr = [];
//     let data = s.trimStart();
    
//     data = data.split('');
   
//     data.forEach((value,index) => {
//         if(value !== ' ') {
//             arr.push(value);
//         } 
//         if(value === ' ' && arr[index-1] !==' ')
//         {
//             arr.push(value);    
//         }
//     });
    
//     arr.forEach((value,index)=>{
//         if(index%2 === 0) {
//             arr[index] = value.toUpperCase();
//         } else {
//             arr[index] = value.toLowerCase();
//         }
//     })
//     //console.log(arr.join(''));
//     return arr.join('');
// }

function solution(s) {
    var anwer = [];
    
     s.split(' ').map((char) => {
        const array = [...char].map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join('');
         anwer.push(array);
    })
    
    return anwer.join(" ");
    
}