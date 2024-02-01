let str = "The Quick Brown Fox";
const swapArray = str.split("").map(myFunction);

function myFunction(item) {
  if (item === item.toUpperCase()) {
    return item.toLowerCase();
  }else {
   return item.toUpperCase();
  }
}
 
 document.getElementById('demo').innerHTML = ` Output : ${swapArray.join("")}`;
 document.getElementById('input').innerHTML = ` Input  : ${str}`;
 console.log(str);
 console.log(swapArray.join(""));