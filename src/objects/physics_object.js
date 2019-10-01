import properties from '../properties';
import Util from '../utils';

class PhysicsObject {

    constructor(options) {

        this.sprite = options.sprite;
        this.clip = options.clip || {x: 0, y: 0};
        this.pos = options.pos;
        this.vel = {x: 0, y: 0};
        this.size = options.size;
        this.imgsize = options.imgsize || this.size;
        this.imgpos = options.imgpos || {x: 0, y: 0};
        this.age = 0;

        this.held = false;
    }

    draw(ctx) {
        ctx.drawImage(
            this.sprite, 
            this.clip.x, 
            this.clip.y, 
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
            this.applyGravity();
            this.deflect();
            this.pos = Util.addVectors(this.pos, this.vel);
        }
        this.age++;
    }

    applyGravity() {
        if ((this.pos.y + this.size.y) < properties.terrarium.groundHeight) {
            this.vel = Util.addVectors(this.vel, properties.physics.gravity)
        } else if ((this.pos.y + this.size.y) > properties.terrarium.groundHeight) {
            this.pos.y = (properties.terrarium.groundHeight - this.size.y);
            this.vel.y = 0;
        }
    }

    deflect() {
        if (this.pos.x <= 0 || (this.pos.x + this.size.x) >= properties.terrarium.width) {
            this.vel.x = -(this.vel.x/properties.physics.impact);
        } else if (this.pos.y <= 0 || (this.pos.y + this.size.y) >= properties.terrarium.groundHeight) {
            this.vel.y = -(this.vel.y/properties.physics.impact);
        };
    }

    accelerate(vector) {
        this.vel = Util.addVectors(this.vel, vector)
    }

    beDragged(prevPos, posChange) {
        this.pos = {x: prevPos.x + posChange.x, y: prevPos.y + posChange.y};
        this.vel = posChange;
    }

    startDrag() {
        console.log("beep");
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

}


let coinImage = new Image();
coinImage.src = "http://i.imgur.com/2e9Fvrk.gif"
window.coin = new PhysicsObject({sprite: coinImage, pos:{x: 200, y: 200}, size:{x: 152, y: 150}});

export default PhysicsObject;