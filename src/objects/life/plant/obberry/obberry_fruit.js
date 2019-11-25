import Fruit from '../fruit';

import obberryfruitpng from '../../../../assets/obberry/obberry_fruit.png';

class ObberryFruit extends Fruit {
    constructor(options) {
        let sprite = new Image(10, 11);
        sprite.src = obberryfruitpng;

        let newOptions = Object.assign({
            sprite: sprite,
            size: { x: 10, y: 11 },
            isAnimated: false
        }, options)

        super(newOptions);

    }
}

export default ObberryFruit;