import Life from '../life';
import Util from '../../../utils';
import properties from '../../../properties';

class Critter extends Life {
    constructor(options) {
        super(options);

        this.entityType = 'critters';
        
        this.hunger = 0;
        this.hungerThreshold = options.hungerThreshold || 25;
        this.metabolism = 100;
        this.focus = null;
    }

    move() {
        super.move();
        if (this.isFocused()) {
            if (this.focus.isGarbage) {
                this.focus = null;
            } else {
            this.eatFocus();
            }
        }
        if (this.age%this.metabolism === 0) {
            this.hunger++;
        }
    }

    isHungry() {
        if (this.hunger > this.hungerThreshold) {
            return true;
        } else {
            return false;
        }
    }

    setFocus(obj) {
        this.focus = obj;
    }

    isFocused() {
        return (this.focus !== null)
    }

    hop(hopPos) {
        if (hopPos === undefined) {
            this.vel.x += (Util.randInRange(-2, 2) * this.hopsPower);
            this.vel.y = (Util.randInRange(2, 4) * this.hopsPower) + properties.physics.gravity.y;
        } else {
            let hopDir = (hopPos.x - this.pos.x) > 0 ? 1 : -1
            this.vel.x += ((hopPos.x - this.pos.x) / 15) + hopDir*5;
            this.vel.y = (Util.randInRange(2, 4) * this.hopsPower) + properties.physics.gravity.y;
        }
    }

    scoot(scootPos) {
        if (scootPos === undefined) {
            this.vel.x += (Util.randInRange(-2, 2) * this.hopsPower);
            this.vel.y = properties.physics.gravity.y;
        } else {
            let scootDir = (scootPos.x - this.pos.x) > 0 ? 1 : -1
            this.vel.x += ((scootPos.x - this.pos.x) / 15) + scootDir * 5;
            this.vel.y = properties.physics.gravity.y;
        }
    }

    eat(food) {
        this.hunger -= food.heartiness;
        this.focus = null;
        food.flagAsGarbage();
    }

    eatFocus() {
        if (this.doesIntersect(this.focus)) {
            this.eat(this.focus);
        }
    }


}

export default Critter;