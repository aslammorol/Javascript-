let str = "The Quick Brown Fox";
const swapArray = str.split("").map(myFunction);

function myFunction(item) {
  if (item === item.toUpperCase()) {
    return item.toLowerCase();
  }else {
   return item.toUpperCase();
  }
}
 
 console.log(str);
 console.log(swapArray.join(""));