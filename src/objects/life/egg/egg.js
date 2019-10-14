import Life from '../life';
import properties from '../../../properties';

class Egg extends Life {
    constructor(options) {
        super(options);
        this.hatchTime = options.hatchTime;
        this.stages = options.stages;
        this.eggType = options.eggType;
    }

    move() {
        super.move();
    }

    hatch() {
        new this.eggType({
            pos: this.pos
        })
    }

    isHatchable() {
        this.onGround && this.hatchTime >= this.age;
    }

}