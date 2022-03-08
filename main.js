canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color = "cyan";
var widthofline = 3;

//--> NEWWW SECTIONNN <--\\
var MouseEvent = "empty";
var LastPositionOfX, LastPositionOfY;

//-->MOUSEEE EVENTSSS<--\\
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    MouseEvent = "mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    MouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    MouseEvent = "mouseup";
}
 
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove (e) {
    currentpositionofx = e.clientX - canvas.offsetLeft;
    currentpositionofy = e.clientY - canvas.offsetTop;
    //-> .Combination of mousdown and mousemove event. <-\\
    if(MouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokestyle = color;
        ctx.linewidth = 3;
        console.log("last position of x and y co-ordinate = ");
        console.log("x =" + LastPositionOfX + " y =" + LastPositionOfY);
    ctx.arc(currentpositionofx, currentpositionofy, 40, 0, 2*Math.PI);
    ctx.stroke();
    }
    LastPositionOfX = currentpositionofx;
    LastPositionOfY = currentpositionofy;
}

//-->CHALLENGE ROUND<--\\
function clearthecanvasBOI() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


    

    