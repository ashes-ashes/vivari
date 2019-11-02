import Mote from './mote';
import Egg from '../../egg/egg';

import eggsprite from '../../../../assets/mote/mote_egg.png';

class MoteEgg extends Egg {

    constructor(options) {
        let sprite = new Image(60, 30);
        sprite.src = eggsprite;


        let newOptions = Object.assign({
            sprite: sprite,
            size: {x: 15, y: 15},
            isAnimated: true,
            matureAge: 1000,
            ageFrames: {
                0: [{x: 0, y: 0}, {x: 15, y: 0}, {x: 30, y: 0}, {x: 45, y: 0}],
                500: [{x: 0, y: 15}, {x: 15, y: 15}, {x: 30, y: 15}, {x: 45, y: 15}]
            },
            frameLength: 10,
            EggType: Mote,
        }, options)

        super(newOptions);

    }

}

export default MoteEgg;