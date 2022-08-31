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


    const container = document.getElementById("body");
    const btn = document.getElementById("btn");
    let clr = "Dark";
    document.getElementById("clr").innerHTML = clr;
    
    btn.addEventListener('click', function onClick(evennt) {

        clr = "Light";
        
        const bgColor = btn.style.backgroundColor;
        
        if (bgColor == 'Black') {
            document.getElementById('clr').innerHTML = clr;
            btn.style.backgroundColor = 'white';
            btn.style.color = 'black';
            container.style.backgroundColor = 'black';
            hrs.style.color = "white";
            mins.style.color = "white";
            scnd.style.color = "white";
            session.style.color = "white";
        } else {
            clr = 'Dark';
            document.getElementById('clr').innerHTML = clr;
            btn.style.backgroundColor = 'black';
            btn.style.color = 'white';
            container.style.backgroundColor = 'white';
            hrs.style.color = "black";
            mins.style.color = "black";
            scnd.style.color = "black";
            session.style.color = "black";
        }
    })

    setTimeout(()=>{
        displayTime();
    },1000);
}

displayTime()