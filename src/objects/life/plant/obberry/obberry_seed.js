import Obberry from './obberry';
import Egg from '../../egg/egg';

import ossprite from '../../../../assets/obberry/obberry_seed.png';

class ObberrySeed extends Egg {

    constructor(options) {
        let sprite = new Image(5, 5);
        sprite.src = ossprite;


        let newOptions = Object.assign({
            sprite: sprite,
            size: { x: 5, y: 5 },
            matureAge: 1000,
            EggType: Obberry,
            entityType: 'plants'
        }, options)

        super(newOptions);

    }

}

export default ObberrySeed;