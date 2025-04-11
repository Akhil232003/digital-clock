let dayHeading=document.getElementById("day_heading");
let dateHeading=document.getElementById("date_heading");
let timeHeading=document.getElementById("time_heading");
let secondsHeading=document.getElementById("seconds_heading");

function toDisplayDigitalClock(){
    let dateObject=new Date();
    let Day=dateObject.getDay();
    let date =dateObject.getDate();
    let month=dateObject.getMonth();
    let fullYear=dateObject.getFullYear();
    let hours=dateObject.getHours();
    let minutes=dateObject.getMinutes();
    let seconds=dateObject.getSeconds();
    let dayArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    Day=dayArray[Day];
    let monthArray=["January","Feburary","March","April","May","June","July","Augest","September","October","November","December"];
    month=monthArray[month];
    dayHeading.innerText=Day;
    dateHeading.innerText=`${toAddZeros(date)}/${month}/${fullYear}`;
    timeHeading.innerText=`${toAddZeros(hours)}:${toAddZeros(minutes)}`;
    secondsHeading.innerText=toAddZeros(seconds);
}
setInterval(toDisplayDigitalClock,1000);
function toAddZeros(digitalClockValue){
    if(digitalClockValue<=9){
        return `${0}${digitalClockValue}`;
    }
    else{
        return digitalClockValue;
    }
}