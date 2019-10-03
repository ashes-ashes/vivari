import PhysicsObject from '../physics_object';

class Life extends PhysicsObject {
    constructor(options) {
        super(options);
        this.isMature = false;
        this.ageClips = options.ageClips || {}
        this.matureAge = options.matureAge;

        this.frames = ageClips[0];
        
    }

    move() {
        this.grow();
        super.move();
    }

    grow() {
        if (Object.keys(options.ageClips).includes(this.age)) {
            this.clip = this.ageClips[this.age];
        }
    }

}

export default Life; 