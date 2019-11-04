import properties from '../properties';
import Util from '../utils';

class PhysicsObject {

    constructor(options) {

        this.sprite = options.sprite;
        this.clip = options.clip || {x: 0, y: 0};
        this.pos = options.pos || {x: (properties.terrarium.width/2), y: 100};
        this.vel = {x: 0, y: 0};
        this.size = options.size;
        this.imgsize = options.imgsize || options.size;
        this.imgpos = options.imgpos || { x:0, y:0 };

        this.age = 0;

        this.weight = options.weight || properties.physics.impact*10;

        this.frame = 0;
        this.isAnimated = options.isAnimated || false;
        this.frames = options.frames || [this.clip];
        this.frameLength = options.frameLength || properties.window.frameLength;

        this.held = false;
        this.draggable = true;

        this.isGarbage = false;

        this.advanceFrame = () => {
            this.frame < this.frames.length - 1 ? this.frame++ : this.frame = 0;
        }

        this.animate = Util.frameThrottle(this.frameLength, this.advanceFrame, this);
    
    }

    draw(ctx) {
        if (this.isAnimated || this.frame !== 0) {
            this.animate();
        }
        
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
            this.applyFriction();
            this.deflect();
            this.updatePos(Util.addVectors(this.pos, this.vel));
            this.applyGravity();
        }

        this.age++;
    }

    applyGravity() {
        if ((this.pos.y + this.size.y) < properties.terrarium.groundHeight) {
            this.vel = Util.addVectors(this.vel, properties.physics.gravity)
        } else if ((this.pos.y + this.size.y) >= properties.terrarium.groundHeight) {
            this.pos.y = (properties.terrarium.groundHeight - this.size.y);
            this.vel.y = -(this.vel.y - this.weight);
        }

    }


    applyFriction() {
        if (this.onGround()) {
            if (this.vel.x < -properties.physics.groundFriction) {
                this.vel.x += properties.physics.groundFriction;
            } else if (this.vel.x > properties.physics.groundFriction) {
                this.vel.x -= properties.physics.groundFriction;
            } else {
                this.vel.x = 0;
            }
        }
    }

    deflect() {
        if (this.pos.x <= 0 || (this.pos.x + this.size.x) >= properties.terrarium.width) {
            this.vel.x = -(this.vel.x/properties.physics.impact);
            this.pos.x <= 0 ? this.pos.x = 0 : this.pos.x = properties.terrarium.width - this.size.x
        } 
    }

    onGround() {
        return (this.pos.y+this.size.y >= 400);
    }

    updatePos(newPos) {
        this.pos = Object.assign({}, this.pos, newPos);
    }

    updateVel(newVel) {
        this.vel = Object.assign({}, this.vel, newVel);
    }

    accelerate(vector) {
        this.vel = Util.addVectors(this.vel, vector)
    }

    beDragged(prevPos, mousePos) {
        this.pos = {x: mousePos.x - (this.size.x/2), y: mousePos.y - (this.size.y/2)};
        this.vel = { x: this.pos.x-this.prevPos.x, y: this.pos.y-this.prevPos.y}
        this.prevPos = this.pos;
    }

    startDrag() {
        if (properties.dev.debug) {
            properties.dev.focus = this;
        }
        this.held = true;
        this.prevPos = this.pos;
    }

    endDrag() {
        this.held = false;
    }

    center() {
        return {x: this.pos.x + (this.size.x/2), y: this.pos.y + (this.size.y/2)}
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

    doesIntersect(obj) {
        return (this.doesContainPoint(obj.center()) || obj.doesContainPoint(this.center()));
    }

    flagAsGarbage() {
        this.isGarbage = true;
    }

    // advanceFrame() {
    //     if (this.isAnimated || this.frame !== 0) {
    //         this.frame < this.frames.length - 1 ? this.frame++ : this.frame = 0;
    //     }
    // }
    
}

export default PhysicsObject;