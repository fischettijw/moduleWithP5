import Ball from "./Ball.js";
export default class BallDiv {
    constructor(canvasWidth, canvasHeigh, colorBG, ballSize, colorBall, div) {
        let ball;

        new p5(function(p) {
            p.setup = function() {
                p.createCanvas(canvasWidth, canvasHeigh);
                ball = new Ball(p.width / 2, p.height / 2, ballSize, colorBall, -3, 2);
            }

            p.draw = function() {
                p.background(colorBG);
                ball.show(p);
                ball.move(p);
            }
        }, div);
    }
}