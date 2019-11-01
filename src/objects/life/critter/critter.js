import Life from '../life';
import Util from '../../../utils';
import properties from '../../../properties';

class Critter extends Life {
    constructor(options) {
        super(options);

        this.entityType = 'critter';
        
        this.hunger = 0;
        this.metabolism = 100;
        this.targetPos = null;
    }

    move() {
        super.move();
        if (this.age%this.metabolism === 0) {
            this.hunger++;
        }
    }

    hop(hopPos) {
        if (hopPos === undefined) {
            this.vel.x += (Util.randInRange(-2, 2) * this.hopsPower) + properties.physics.groundFriction;
            this.vel.y = (Util.randInRange(2, 4) * this.hopsPower) + properties.physics.gravity.y;
        } else {
            this.vel.x += (hopPos.x - this.pos.x) + properties.physics.groundFriction;
            this.vel.y = properties.physics.gravity.y;
        }
    }

    scoot(scootPos) {
        if (scootPos === undefined) {
            this.vel.x += (Util.randInRange(-2, 2) * this.hopsPower) + properties.physics.groundFriction;
            this.vel.y = properties.physics.gravity.y;
        } else {
            this.vel.x += (scootPos.x - this.pos.x) + properties.physics.groundFriction;
            this.vel.y = properties.physics.gravity.y;
        }
    }


}

export default Critter;