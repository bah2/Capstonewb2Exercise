// using if statement


var pay_rate = 17.30; 
var hoursWorked = 45;
var grossPay = hoursWorked * pay_rate;
var overTime = hoursWorked - 40; 
var overTimePay = overTime*1.5*pay_rate;
var soft;

if(hoursWorked<=40 ){
    
    grossPay <500;
    console.log("You have havent earned an over time and your pay is $" + grossPay);
}
else if(hoursWorked >= 40){
    grossPay>=500;
    console.log("Great you earned an over time and your gross pay is $ " + grossPay + ", and your overtime is $" + overTimePay);
}



   