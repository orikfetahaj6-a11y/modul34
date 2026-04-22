// function printNames(){
//     document.write("John");
//     document.write("<br>");
//     setTimeout(function(){ document.write("Orgesa");}, 3000);
//     document.write("BoB");
// }

// printNames();

var colors = ['red','green','blue','orange','purple'];
function changeBgColor(){
    document.querySelector('body').style.backgroundColor =
    colors[Math.floor(Math.random()*colors.length)];
}

var names = ['Leart','Orgesa','Erela','Dion','Orik'];
function changeNames(){
    document.querySelector('p').innerHTML=
    names[Math.floor(Math.random()*names.length)];
}



setInterval(changeNames,1000);


setInterval(changeBgColor,1000);