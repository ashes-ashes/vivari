import Life from '../life';
import Util from '../../../utils';
import properties from '../../../properties';

class Critter extends Life {
    constructor(options) {
        super(options);

        this.entityType = 'critter';
        
        this.hunger = 0;
        this.metabolism = 10;
    }

    move() {
        super.move();
        if (this.age%this.metabolism === 0) {
            this.hunger++;
        }
    }

    hop() {
        this.vel.x += (Util.randInRange(-2, 2) * this.hopsPower) + properties.physics.groundFriction;
        this.vel.y = (Util.randInRange(2, 4) * this.hopsPower) + properties.physics.gravity.y;
    }


}

export default Critter;