const letter = ["a", "b", "c", "d"];

// function linearSearch(arr,val) {
//   let position = arr.indexOf(val);
//   position = arr.indexOf(val) >=0 ? position : "Not found ";
//   return position;
// }

// console.log(linearSearch(letter,"d"));


function linearSearch(arr,val){
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === val) {
      return i ;
    }
  }
  return "not found";
}

console.log(linearSearch(letter,"d"));