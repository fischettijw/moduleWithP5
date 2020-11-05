import Ball from "./Ball.js";
export default class BallDiv {
    constructor(canvasWidth, canvasHeigh, colorBG, ballSize, colorBall, xVel, yVel, div) {
        let ball;

        new p5(function(p) {
            p.setup = function() {
                p.createCanvas(canvasWidth, canvasHeigh);
                ball = new Ball(p.width / 2, p.height / 2, ballSize, colorBall, xVel, yVel);
            }

            p.draw = function() {
                p.background(colorBG);
                ball.show(p);
                ball.move(p);
            }
        }, div);
    }
}