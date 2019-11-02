import Plant from '../plant';
import EtomatFruit from './etomat_fruit';

import Util from '../../../../utils';

import etomatpng from '../../../../assets/etomat/etomat.png';

class Etomat extends Plant {

    constructor(options = {}) {

        let sprite = new Image(30, 400);
        sprite.src = etomatpng;

        let etomatOptions = Object.assign({}, {
            sprite: sprite,
            size: { x: 30, y: 40 },
            isAnimated: false,
            FruitClass: EtomatFruit,
            fruitPos: {x: 0, y: 13},
            fruitTime: 500,
            ageFrames: Util.constructAgeFrames(30, 40, 1, 10, 100),
            matureAge: 900
        }, options)

        super(etomatOptions);

    }

}

export default Etomat;