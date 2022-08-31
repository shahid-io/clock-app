const hour = document.getElementById("hour");
const minutes = document.getElementById("minute");
const seconds = document.getElementById("second");
const session = document.getElementById("session");

const container = document.getElementById("body");
const btn = document.getElementById("btn");
let clr = "Dark";
document.getElementById("clr").innerHTML = clr;

btn.addEventListener('click', function onClick(event) {
  const backgroundColor = btn.style.backgroundColor;

  if (backgroundColor === 'black') {
    clr='Light'
    document.getElementById('clr').innerHTML = clr;
    btn.style.backgroundColor = 'white';
    btn.style.color = 'black';
    container.style.backgroundColor = 'black';
    hour.style.color="white";
    seconds.style.color="white";
    minutes.style.color="white";
    session.style.color="white";
  } else {
    clr = 'Dark';
    document.getElementById('clr').innerHTML = clr;
    btn.style.backgroundColor = 'black';
    btn.style.color = 'white';
    container.style.backgroundColor = 'white';
    hour.style.color="black";
    seconds.style.color="black";
    minutes.style.color="black";
    session.style.color="black";
  }
})


function displayTime() {
    var dateTime = new Date();
    let hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var scnd = dateTime.getSeconds();
    var session = document.getElementById("session");
    console.log(session);
    
    if (hrs >= 12) {
        session.innerHTML = 'pm';
    } else {
        session.innerHTML = 'am';
    }
    if (hrs > 12){
        hrs = hrs - 12;
    }
    document.getElementById("hour").innerHTML = hrs;
    document.getElementById("minute").innerHTML = mins;
    document.getElementById("second").innerHTML = scnd;

    setTimeout(()=>{
        displayTime();
    },1000);
}


displayTime()