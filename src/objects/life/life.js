import PhysicsObject from '../physics_object';

class Life extends PhysicsObject {
    constructor(options) {
        super(options);
        this.isMature = false;
        this.ageFrames = options.ageFrames || {}
        this.matureAge = options.matureAge;

    }

    move() {
        this.grow();
        super.move();
    }

    grow() {
        if (Object.keys(this.ageFrames).includes(this.age)) {
            this.frames = this.ageFrames[this.age];
        }
    }

}

export default Life; 