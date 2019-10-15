import PhysicsObject from '../physics_object';

class Life extends PhysicsObject {
    constructor(options) {
        super(options);
        this.ageFrames = options.ageFrames || { 0: [{ x: 0, y: 0 }] };
        this.matureAge = options.matureAge;

        this.frames = this.ageFrames[0];

        this.stage = 0;
        this.lifeSpan = null;
        this.isMature = false;

    }

    move() {
        this.grow();
        super.move();
    }

    grow() {
        if (Object.keys(this.ageFrames).includes(this.age.toString())) {
            this.frames = this.ageFrames[this.age];
            this.stage++;
        }
    }

}

export default Life; 