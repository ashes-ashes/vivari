import PhysicsObject from '../objects/physics_object';

class Terrarium {
    constructor() {
        this.physicsObjects = [];
        this.addPhysicsObject = this.addPhysicsObject.bind(this);
    }

    draw(ctx) {
        this.physicsObjects.forEach((obj) => {
            obj.draw(ctx);
        });
    }

    move() {
        this.physicsObjects.forEach((obj) => {
            obj.move();
        });
    }

    addPhysicsObject(obj) {
        this.physicsObjects.push(obj);
    }

}

export default Terrarium;