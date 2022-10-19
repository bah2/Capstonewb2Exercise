// using ifstatement to auto greetings
var currentHrs = 18;
var morningHrs;
var noonHrs;
var eveningHrs;

// using gmt time here, I should consider other ways of writing this code
if((currentHrs>=1)&&(currentHrs<=10)){
    console.log("Good Morning!")
}
else if((currentHrs>=11) && (currentHrs<=17)){
    console.log("Good day!")
}
else if((currentHrs>=18)&& (currentHrs <=23)){

    console.log("Good evening")


}
else{
    console.log
    
}
   