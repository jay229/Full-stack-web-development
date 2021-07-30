console.log("This is coundown project");
let d=document.getElementById("days");
let h=document.getElementById("hours");
let m=document.getElementById("mins");
let s=document.getElementById("sec");
// console.log(s);

const ad="4 Dec 2021";
function countdown(){
    const cd=new Date();
    const myad=new Date(ad);
    const totalSeconds = (myad - cd) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    // console.log(days);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const sec = Math.floor(totalSeconds) % 60;
    
    d.innerHTML = days;
    console.log(d.innerHTML);
    h.innerHTML = formatTime(hours);
    m.innerHTML = formatTime(mins);
    s.innerHTML = formatTime(sec);
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);