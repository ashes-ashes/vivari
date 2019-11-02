import Critter from '../critter';

import Egg from '../../egg/egg';

import motepng from '../../../../assets/mote/mote.png';

class Mote extends Critter {

    constructor(options = {}) {

        let sprite = new Image(30, 30);
        sprite.src = motepng;

        let moteOptions = Object.assign({}, {
            sprite: sprite,
            size: {x: 15, y: 15},
            imgsize: {x: 30, y: 30},
            imgpos: {x: -7, y: -7},
            isAnimated: false,
        }, options)

        super(moteOptions);

        this.hopsPower = 10;
        this.metabolism = 20;
    }

    move() {
        super.move();
        if (Math.random() < 0.01) {
            this.takeAction();
        };
    }

    takeAction() {
        if (this.focus !== null) {
            this.hop(this.focus.pos);
        } else {
            this.hop();
        }
    }

}

window.coin = new Mote();
window.testEgg = new Egg({
    matureAge: 1000,
    EggType: Mote,
});

export default Mote;