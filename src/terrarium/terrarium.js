import PhysicsObject from '../objects/physics_object';
import Mote from '../objects/life/critter/mote';
import Util from '../utils';


class Terrarium {
    constructor() {
        this.physicsObjects = [];
        this.heldObj = null;

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

    handleMouseDown(mousePos) {

        let target = this.physicsObjects.find((obj) => 
            obj.doesContainPoint(mousePos)
        )
        if (target) {
            target.startDrag();
            this.heldObj = target;
        }
    }

    handleMouseUp() {
        if (this.heldObj) {
            this.heldObj.endDrag();
            this.heldObj = null;
        }
    }

    handleDrag(mousePos) {

        if (this.heldObj) {
            let prevPos = this.heldObj.pos;
            this.heldObj.beDragged(prevPos, mousePos);
        }
    }

    addMote() {
        this.addPhysicsObject(new Mote({ size: { x: 30, y: 30 }, isAnimated: false, ageFrames: { 0: [{ x: 0, y: 0 }, { x: 31, y: 0 }, { x: 61, y: 0 }] } }));
    }

}

export default Terrarium;