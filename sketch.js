import Ball from "./Ball.js";

let ball;

new p5(function(p) {
    p.setup = function() {
        p.createCanvas(400, 400);
        ball = new Ball(p.width / 2, p.height / 2, 20, 'red', -3, 2);
    }

    p.draw = function() {
        p.background(220);
        ball.show(p);
        ball.move(p);
    }
})