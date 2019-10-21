import Life from '../life';
import properties from '../../../properties';

class Fruit extends Life {
    
    constructor(options) {
        super(options);

        this.parent = options.parent || null;
        this.picked = false;
    }

    move() {
        if (this.picked) {
            super.move();
        }
    }

    startDrag() {
        this.picked = true;
        super.startDrag();
    }

}

export default Fruit;