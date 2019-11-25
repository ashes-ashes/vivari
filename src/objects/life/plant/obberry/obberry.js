import Plant from '../plant';
import ObberryFruit from './obberry_fruit';

import Util from '../../../../utils';

import obberrypng from '../../../../assets/obberry/obberry.png';

class Obberry extends Plant {

    constructor(options = {}) {

        let sprite = new Image(18, 378);
        sprite.src = obberrypng;

        let obberryOptions = Object.assign({}, {
            sprite: sprite,
            size: { x: 18, y: 42 },
            isAnimated: false,
            FruitClass: ObberryFruit,
            fruitPos: {x: 8, y: 0},
            fruitTime: 500,
            ageFrames: Util.constructAgeFrames(18, 42, 1, 9, 100),
            matureAge: 800,
            heartiness: 50
        }, options)

        super(obberryOptions);

    }

}

export default Obberry;