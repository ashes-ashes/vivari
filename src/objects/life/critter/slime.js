import Critter from './critter';
import Util from '../../../utils';
import properties from '../../../properties';

class Slime extends Critter {

    constructor(options) {
        super(options);

        this.hopsPower = 10;
    }

    move() {
        super.move();
        if (Math.random() < 0.01) {
            this.hop();
        }
    }
}

let coinImage = new Image();
coinImage.src = "https://i.imgur.com/xRsDpkv.png"
window.coin = new Slime({ sprite: coinImage, size: { x: 30, y: 30 }, isAnimated: true, ageFrames: {0: [{ x: 0, y: 0 }, { x: 31, y: 0 }, { x: 61, y: 0 }]}});

export default Slime;