var intervalID = setInterval(timeOut, 1000);

function timeOut () {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}