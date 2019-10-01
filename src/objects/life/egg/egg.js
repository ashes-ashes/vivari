import Life from '../life';

class Egg extends Life {
    constructor(options) {
        super(options);
        this.incubationTime = options.incubationTime;
        this.stages = options.stages;
    }

    move() {
        super.move();
    }


}