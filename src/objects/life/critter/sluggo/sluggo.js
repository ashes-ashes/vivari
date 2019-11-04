import Critter from '../critter';

import Egg from '../../egg/egg';

import sluggopng from '../../../../assets/sluggo/sluggo.png';

class Sluggo extends Critter {

    constructor(options = {}) {

        let sprite = new Image(50, 13);
        sprite.src = sluggopng;

        let sluggoOptions = Object.assign({}, {
            sprite: sprite,
            size: { x: 25, y: 13 },
            ageFrames: {
                0: [{ x: 0, y: 0 }, { x: 25, y: 0 }],
            },
            frameLength: 10,
        }, options)

        super(sluggoOptions);

        this.hopsPower = 5;
        this.metabolism = 20;
    }

    move() {
        super.move();
        if (Math.random() < 0.02) {
            this.takeAction();
        };
    }

    takeAction() {
        if (this.focus !== null) {
            this.advanceFrame();
            this.scoot(this.focus.pos);
        } else {
            this.advanceFrame();
            this.scoot();
        }
    }

}

export default Sluggo;