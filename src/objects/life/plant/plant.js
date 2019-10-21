import Life from '../life';
import Fruit from './fruit'

import properties from '../../../properties';

class Plant extends Life {
    
    constructor(options) {
        super(options);
        this.pos.y = properties.terrarium.groundHeight - this.size.y;

        this.entityType = 'plant';

        this.Fruit = options.fruit || Fruit;
        this.hasFruit = false;
        this.fruitTime = options.fruitTime || 10000;
        this.fruitCountdown = 0;
        this.fruitPos = options.fruitPos || {x: 0, y: 0}
    }


    move() {
        this.age++;
        this.grow();
    }

    grow() {
        super.grow();
    }

    startDrag() {
    }

    beDragged() {
    }

    endDrag() {
    }

    
}

export default Plant;