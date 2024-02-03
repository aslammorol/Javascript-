// একটি array থেকে সবচেয়ে বড় শব্দ খুজে বের করতে হবে এবং তার ইন্ডেক্স রিটার্ন করতে হবে 

const names = ["Aslam", "Syeedul", "Hasib", "Bangladesh"];

function longestString(arr) {
  let longestWord = "";
  for( let name of arr){
    if (name.length > longestWord.length) {
      longestWord = name;
    }
  }
  return [longestWord,arr.indexOf(longestWord)];
}

console.log(longestString(names));