import Sluggo from './sluggo';
import Egg from '../../egg/egg';

import eggsprite from '../../../../assets/sluggo/sluggo_egg.png';

class SluggoEgg extends Egg {

    constructor(options) {
        let sprite = new Image(26, 13);
        sprite.src = eggsprite;


        let newOptions = Object.assign({
            sprite: sprite,
            size: { x: 13, y: 13 },
            isAnimated: true,
            matureAge: 1000,
            ageFrames: {
                0: [{ x: 0, y: 0 }, { x: 13, y: 0 }]
            },
            frameLength: 10,
            EggType: Sluggo,
        }, options)

        super(newOptions);

    }

}

export default SluggoEgg;