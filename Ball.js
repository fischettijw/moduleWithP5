class Ball {
    constructor(x, y, diam, clr, xVel, yVel) {
        this.x = x;
        this.y = y;
        this.diam = diam;
        this.clr = clr;
        this.xVel = xVel;
        this.yVel = yVel;
        this.radius = this.diam / 2;
    }

    show() {
        fill(this.clr);
        ellipse(this.x, this.y, this.diam, this.diam);
    }

    move() {
        this.x += this.xVel;
        this.y += this.yVel;
        this.bounce();
    }

    bounce() {
        if (this.x - this.radius <= 0 || this.x + this.radius >= width) { this.xVel *= -1; }
        if (this.y - this.radius <= 0 || this.y + this.radius >= height) { this.yVel *= -1; }
    }
}