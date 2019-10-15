import Life from '../life';
import properties from '../../../properties';


import eggpng from '../../../assets/egg.png'

class Egg extends Life {
    constructor(options = {}) {

        let sprite = new Image(50, 60);
        sprite.src = eggpng;

        let eggOptions = Object.assign({}, {
            sprite: sprite,
            size: {x: 50, y: 60},
        }, options)

        super(eggOptions);
    
        // this.stages = options.stages;
        this.EggType = options.EggType;
        this.entityType = options.EggType.entityType;
    }

    // move() {
    //     super.move();
    // }

    hatch() {
        return new this.EggType({
            pos: this.pos
        })
    }

    isHatchable() {
        return (this.onGround && this.matureAge <= this.age);
    }

}

export default Egg;