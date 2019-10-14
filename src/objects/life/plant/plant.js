import Life from '../life';

import properties from '../../../properties';

class Plant extends Life {
    
    constructor(options) {
        super(options);
        this.pos.y = properties.terrarium.groundHeight;
    }


    move() {
        this.age++;
        this.grow();
    }

    startDrag() {
        this.advanceFrame();
    }

    beDragged() {
    }

    endDrag() {
    }
    
}

export default Plant;