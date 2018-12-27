window.onload = function() {
    var canvas = document.querySelector("canvas");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    var c = canvas.getContext('2d');



var x = 300;
var y = 400;
var dx = 2;
var dy = 0;
var radius = 150;

function circleOne() {
    requestAnimationFrame(circleOne);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = "lightblue";
    c.stroke();
    c.fillStyle = "rgba(148, 0, 211, .2)";
    c.fill();

if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
}

if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
}

x += dx;
y += dy;

}


circleOne();

    var x2 = 500;
    var y2 = 400;
    var dx2 = 2;
    var dy2 = 0;
    
 function circleTwo() {
        requestAnimationFrame(circleTwo);
        c.beginPath();
        c.arc(x2, y2, radius, 0, Math.PI * 2, false);
        c.strokeStyle = "lightblue";
        c.stroke();
        c.fillStyle = "rgba(75, 0, 130, .2)";
        c.fill();
    
    if (x2 + radius > innerWidth || x2 - radius < 0) {
        dx2 = -dx2;
    }
    
    if (y2 + radius > innerHeight || y2 - radius < 0) {
        dy2 = -dy2;
    }
    
    x2 += dx2;
    y2 += dy2;
    
    }
    
    circleTwo();


    var x3 = 700;
    var y3 = 400;
    var dx3 = 2;
    var dy3 = 0;
    
 function circleThree() {
        requestAnimationFrame(circleThree);
        c.beginPath();
        c.arc(x3, y3, radius, 0, Math.PI * 2, false);
        c.strokeStyle = "lightblue";
        c.stroke();
        c.fillStyle = "rgba(0, 0, 255, .2)";
        c.fill();
    
    if (x3 + radius > innerWidth || x3 - radius < 0) {
        dx3 = -dx3;
    }
    
    if (y3 + radius > innerHeight || y3 - radius < 0) {
        dy3 = -dy3;
    }
    
    x3 += dx3;
    y3 += dy3;
    
    }
    
    circleThree();


    var x4 = 900;
    var y4 = 400;
    var dx4 = 2;
    var dy4 = 0;
    radius3 = 300;

 function circleFour() {
        requestAnimationFrame(circleFour);
        c.beginPath();
        c.arc(x4, y4, radius, 0, Math.PI * 2, false);
        c.strokeStyle = "lightblue";
        c.stroke();
        c.fillStyle = "rgba(0, 255, 0, .2)";
        c.fill();
    
    if (x4 + radius > innerWidth || x4 - radius < 0) {
        dx4 = -dx4;
    }
    
    if (y4 + radius > innerHeight || y4 - radius < 0) {
        dy4 = -dy4;
    }
    
    x4 += dx4;
    y4 += dy4;
    
    }
    
    circleFour();


    var x5 =1100;
    var y5 = 400;
    var dx5 = 2;
    var dy5 = 0;
    
 function circleFive() {
        requestAnimationFrame(circleFive);
        c.beginPath();
        c.arc(x5, y5, radius, 0, Math.PI * 2, false);
        c.strokeStyle = "lightblue";
        c.stroke();
        c.fillStyle = "rgba(255, 255, 0, .2)";
        c.fill();
    
    if (x5 + radius > innerWidth || x5 - radius < 0) {
        dx5 = -dx5;
    }
    
    if (y5 + radius > innerHeight || y5 - radius < 0) {
        dy5 = -dy5;
    }
    
    x5 += dx5;
    y5 += dy5;
    
    }
    
    circleFive();



    var x6 = 1300;
    var y6 = 400;
    var dx6 = 2;
    var dy6 = 0;
    
 function circleSix() {
        requestAnimationFrame(circleSix);
        c.beginPath();
        c.arc(x6, y6, radius, 0, Math.PI * 2, false);
        c.strokeStyle = "lightblue";
        c.stroke();
        c.fillStyle = "rgba(255, 127, 0, .2)";
        c.fill();
    
    if (x6 + radius > innerWidth || x6 - radius < 0) {
        dx6 = -dx6;
    }
    
    if (y6 + radius > innerHeight || y6 - radius < 0) {
        dy6 = -dy6;
    }
    
    x6 += dx6;
    y6 += dy6;
    
    }
    
    circleSix();



    var x7 = 1500;
    var y7 = 400;
    var dx7 = 2;
    var dy7 =0;
    
 function circleSeven() {
        requestAnimationFrame(circleSeven
    );
        c.beginPath();
        c.arc(x7, y7, radius, 0, Math.PI * 2, false);
        c.strokeStyle = "lightblue";
        c.stroke();
        c.fillStyle = "rgba(255, 0 , 0, .2)";
        c.fill();
    
    if (x7 + radius > innerWidth || x7 - radius < 0) {
        dx7 = -dx7;
    }
    
    if (y7 + radius > innerHeight || y7 - radius < 0) {
        dy7 = -dy7;
    }
    
    x7 += dx7;
    y7 += dy7;
    
    }
    
    circleSeven();

}
