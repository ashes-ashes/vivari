import properties from '../properties';
import Util from '../utils';

class PhysicsObject {

    constructor(options) {

        this.sprite = options.sprite;
        this.clip = options.clip || {x: 0, y: 0};
        this.pos = options.pos || {x: properties.terrarium.width/2, y: 100};
        this.vel = {x: 0, y: 0};
        this.size = options.size;
        this.imgsize = options.imgsize || this.size;
        this.imgpos = options.imgpos || { x: properties.terrarium.width / 2, y: 100 };

        this.age = 0;

        this.frame = 0;
        this.isAnimated = options.isAnimated || false;
        this.frames = options.frames || [this.clip];

        this.held = false;
    }

    draw(ctx) {
        ctx.drawImage(
            this.sprite, 
            this.frames[this.frame].x, 
            this.frames[this.frame].y, 
            this.imgsize.x,
            this.imgsize.y,
            (this.pos.x + this.imgpos.x),
            (this.pos.y + this.imgpos.y),
            this.imgsize.x,
            this.imgsize.y
        );
    }

    move() {
        if (!this.held) {
            this.pos = Util.addVectors(this.pos, this.vel);
            this.applyGravity();
            this.deflect();
            this.settle();
        }

        if (this.isAnimated) {
            this.frame < this.frames.length ? this.frame++ : this.frame = 0;
        } else if (this.frame !== 0) {
            this.frame === this.frames.length ? this.frame = 0 : this.frame++;
        }

        this.age++;
    }

    applyGravity() {
        if ((this.pos.y + this.size.y) < properties.terrarium.groundHeight) {
            this.vel = Util.addVectors(this.vel, properties.physics.gravity)
        } else if ((this.pos.y + this.size.y) >= properties.terrarium.groundHeight) {
            this.pos.y = (properties.terrarium.groundHeight - this.size.y);
            this.vel.y = -(this.vel.y - properties.physics.impact);
        }

    }

    settle() {
        if (this.vel.y < 0.10 && this.vel.y > 0) {
            this.vel.y = 0;
        }
    }

    deflect() {
        if (this.pos.x <= 0 || (this.pos.x + this.size.x) >= properties.terrarium.width) {
            this.vel.x = -(this.vel.x/properties.physics.impact);
        }
    }

    accelerate(vector) {
        this.vel = Util.addVectors(this.vel, vector)
    }

    beDragged(prevPos, mousePos) {
        // this.vel = { x: mousePos.x-this.pos.x, y: mousePos.y-this.pos.y}
        this.pos = {x: mousePos.x - (this.size.x/2), y: mousePos.y - (this.size.y/2)};
    }

    startDrag() {
        this.held = true;
    }

    endDrag() {
        this.held = false;
    }

    doesContainPoint(point) {
        let top = this.pos.y;
        let bottom = this.pos.y + this.size.y;
        let left =  this.pos.x;
        let right = this.pos.x + this.size.x;
        if (
            top <= point.y && bottom >= point.y &&
            left <= point.x && right >= point.x
        ) {
            return true
        } else {
            return false
        }
    }

    animateOnce(frames) {

    }

}


let coinImage = new Image();
coinImage.src = "https://i.imgur.com/xRsDpkv.png"
window.coin = new PhysicsObject({sprite: coinImage, size:{x: 30, y: 30}, isAnimated: true, frames: [{x: 0, y: 0}, {x: 31, y: 0}, {x: 62, y: 0}]});

export default PhysicsObject;