// ১-১০০ এর মধ্যে ৩,৫ ও ৩ এবং ৫ উভয় দ্বারা বিভাজ্য সংখ্যা কি কি

 function fizzBuzz(number) {
for (let i = 1; i <= number; i++) {
  if (i % 15 === 0) {
    console.log(`${i} is divisible by 3 and 5`);
  } else if(i % 3 === 0){
    console.log(`${i} is divisible by 3`);
  }else if(i % 5 === 0){
    console.log(`${i} is divisible by 5`);
  } else{
    console.log(`${i} is not divisible by 3, 5 and both`);
  }
}
}

fizzBuzz(15);