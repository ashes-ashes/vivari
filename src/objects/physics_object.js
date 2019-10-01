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
        this.applyGravity();
        this.deflect();
        this.pos = Util.addVectors(this.pos, this.vel);
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

    beDragged(prevPos, newPos) {
        this.pos = newPos;
        this.vel = {x: newPos.x-prevPos.x, y: newPos.y-prevPos.y}
    }

}


let coinImage = new Image();
coinImage.src = "http://i.imgur.com/2e9Fvrk.gif"
window.coin = new PhysicsObject({sprite: coinImage, pos:{x: 200, y: 200}, size:{x: 152, y: 150}});

export default PhysicsObject;