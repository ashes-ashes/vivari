import Fruit from '../fruit';

import etomatfruitpng from '../../../../assets/etomat/etomat_fruit.png';

class EtomatFruit extends Fruit {
    constructor(options) {
        let sprite = new Image(14, 14);
        sprite.src = etomatfruitpng;


        let newOptions = Object.assign({
            sprite: sprite,
            size: { x: 14, y: 14 },
            isAnimated: false
        }, options)

        super(newOptions);

    }
}

export default EtomatFruit;