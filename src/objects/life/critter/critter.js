import Life from '../life';
import Util from '../../../utils';
import properties from '../../../properties';

class Critter extends Life {
    constructor(options) {
        super(options);
        
        this.hunger = 0;
        
    }

    hop() {
        this.vel.x += (Util.randInRange(-2, 2) * this.hopsPower) + properties.physics.groundFriction;
        this.vel.y = (Util.randInRange(2, 4) * this.hopsPower) + properties.physics.gravity.y;
    }


}

export default Critter;