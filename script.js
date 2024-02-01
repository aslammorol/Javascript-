const myArray = [1, 3,2,2,4,2,6,3,2,2,2];
 myArray.sort((a, b) => a - b);
 console.log(myArray);
 let count = 1;
 let max = 0;
 let elemnt;
 for (let i = 1; i < myArray.length; i++) {
   if (myArray[i] === myArray[i - 1]) {
     count++;
   }else{
     count = 1;
   }
   if (count > max ) {
     max = count;
     elemnt = myArray[i];
   }
 }
 console.log(`item : ${elemnt}, occurance : ${max}`); 
 