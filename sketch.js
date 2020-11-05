let ball;

function setup() {
    createCanvas(500, 500);
    ball = new Ball(width / 2, height / 2, 20, 'red', -3, 2);
}

function draw() {
    background(220);
    ball.show();
    ball.move();
}

//