import Critter from './critter';
import Util from '../../../utils';
import properties from '../../../properties';

import motepng from '../../../assets/mote.png';

class Mote extends Critter {

    constructor(options) {
        super(options);

        this.sprite = new Image(30, 30);
        this.sprite.src = motepng;

        this.hopsPower = 10;
    }

    move() {
        super.move();
        if (Math.random() < 0.01) {
            this.hop();
        }
    }
}

window.coin = new Mote({size: { x: 30, y: 30 }, isAnimated: false, ageFrames: {0: [{ x: 0, y: 0 }, { x: 31, y: 0 }, { x: 61, y: 0 }]}});

export default Mote;