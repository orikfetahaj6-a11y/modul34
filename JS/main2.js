var circle = document.getElementById("circle");
var showTime = document.getElementById("time");
var timestart = new Date().getTime();

function showCircle(){
    circle.style.display = 'block';
    circle.style.top = Math.random() * 500 + 'px';
    circle.style.left = Math.random() * 900 + 'px';
    timestart = new Date().getTime();
}
showCircle();

circle.onclick = function(){
    circle.style.display = 'none';
    setTimeout(showCircle,1000);
    var timeEnd = new Date().getTime();
    var time =(timeEnd - timestart)/1000;
    showTime.innerHTML = time + "s"
}