
window.onload = function() {
var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// function Circle(x, y, dx, dy, radius) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius;

//     this.draw = function() {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         c.strokeStyle = "lightblue";
//         c.stroke();
//         // c.fill();
//     }

//     this.update = function() {
//         if (this.x + this.radius > innerWidth || this.x - radius < 0) {
//             this.dx = -this.dx;
//         }
        
//         if (this.y + this.radius > innerHeight || this.y - radius < 0) {
//             this.dy = -this.dy;
//         }
        
//         this.x += this.dx;
//         this.y += this.dy;

//         this.draw();
//         // this.update();
//     }
// }

var circle = new Circle(200, 200, 3, 3, 30);
circle.draw();
circle.update();

var x = 200;
var y = 300;
var dx = 4;
var dy = 4;
var radius = 30;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
c.arc(x, y, radius, 0, Math.PI * 2, false);
c.strokeStyle = "lightblue";
c.stroke();


circle.draw();


if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
}

if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
}

x += dx;
y += dy;

}
animate();
}
// c.fillStyle = "whitesmoke";
// c.fillRect(100, 100, 100, 100);

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(300, 500);
// c.strokeStyle = "pink";
// c.stroke();


// for (var i = 0; i < 10 ; i++){
//     var x = Math.random * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
// c.beginPath();
// c.arc(x, y, 300, 0, Math.PI * 2, false);
// c.strokeStyle = "lightblue";
// c.stroke();

// }}

