import Ball from "./Ball.js";
export default class BallDiv {
    constructor(canvasWidth, canvasHeigh, colorBG, ballSize, colorBall, xVel, yVel, div) {
        let ball = [];
        let nb = 10;

        new p5(function(p) {
            p.setup = function() {
                p.createCanvas(canvasWidth, canvasHeigh);
                for (let i = 0; i < nb; i++) {
                    let rx = p.random(0, 10);
                    let ry = Math.random(0, 10);
                    ball[i] = new Ball(p.width / 2, p.height / 2, ballSize, colorBall, xVel + rx, yVel + ry);
                }
            }

            p.draw = function() {
                p.background(colorBG);
                for (let i = 0; i < nb; i++) {
                    ball[i].show(p);
                    ball[i].move(p);
                }
            }
        }, div);
    }
}