import Life from '../life';

class Egg extends Life {
    constructor(options) {
        super(options);
        this.hatchTime = options.hatchTime;
        this.stages = options.stages;
    }

    move() {
        super.move();
    }

}