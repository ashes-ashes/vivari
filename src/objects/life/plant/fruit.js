import Life from '../life';
import properties from '../../../properties';

class Fruit extends Life {
    
    constructor(options) {
        super(options);

        this.parentPlant = options.parentPlant || null;
        this.picked = false;
        this.heartiness = options.heartiness || 100;
    }

    move() {
        if (this.picked) {
            super.move();
        }
    }

    startDrag() {
        this.picked = true;
        this.parentPlant.defruit();
        super.startDrag();
    }

}

export default Fruit;