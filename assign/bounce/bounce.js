var ball = document.createElement('div');
var container = document.createElement('div');
var gravity = 1;

ball.style.backgroundColor = "blue";
ball.style.borderRadius = "50%";
ball.style.top = "10px";
ball.style.width = "50px";
ball.style.height = "50px";
ball.style.position = "absolute";

container.style.width = "500px";
container.style.height = "500px";
container.style.backgroundColor = "black";
container.style.position = "absolute";

document.body.append(container);
document.body.append(ball);
var height = parseInt(container.style.height);
var sheight = parseInt(ball.style.height);
var boxup = parseInt(container.style.up);
var tip = parseInt(ball.style.top);
var border = parseInt(container.style.width);


setInterval(function () {
    gravity += 1;
    tip += gravity;
    if (tip >= (height - sheight)) {
        gravity = -gravity;
        tip += gravity;


    }
    // console.log(tip, gravity);
    //gravity = +gravity;

    ball.style.top = (tip) + 'px';

}, 100);