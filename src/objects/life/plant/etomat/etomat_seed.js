import Etomat from './etomat';
import Egg from '../../egg/egg';

import essprite from '../../../../assets/etomat/etomat_seed.png';

class EtomatSeed extends Egg {

    constructor(options) {
        let sprite = new Image(5, 5);
        sprite.src = essprite;


        let newOptions = Object.assign({
            sprite: sprite,
            size: { x: 5, y: 5 },
            matureAge: 1000,
            EggType: Etomat,
            entityType: 'plants'
        }, options)

        super(newOptions);

    }

}

export default EtomatSeed;