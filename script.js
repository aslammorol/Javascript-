const numbers = [45, 4, 9, 16, 25];
let txt = 0;
for (let x in numbers) {
    txt += numbers[x];
}
// for(let i = 0; i < numbers.length; i++){
//   txt += numbers[i];
// }
console.log(txt);
