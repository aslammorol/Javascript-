const payment = true;
const marks = 70;
function enroll(callback) {
  console.log("Course enrolment is in progress...");
  setTimeout(function() {
    if (payment) {
      callback();
    }else{
      console.log("Payment Failed");
    }
  },2000 );
}

function progress(callback) {
  console.log("Course is in progress...");
  setTimeout(function() {
    if(marks >= 80){
      callback();
    }else{
      console.log(`You got ${marks} and its not enough to get certificate`);
    }
  },3000);
}

function getCertificate(){
  console.log("Getting certificate ready for you...");
  setTimeout(function(){
    console.log("Congrats! you got the certificate");
  },2000);
}

enroll(function(){
  progress(getCertificate);
});