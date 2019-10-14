import PhysicsObject from '../objects/physics_object';
import Mote from '../objects/life/critter/mote';
import Util from '../utils';


class Terrarium {
    constructor() {
        this.physicsObjects = [];
        
        this.entities = {
            plants: [],
            critters: [],
            eggs: [],
            fruit: [],
        }

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

    addObject(Class, entityType) {
        let obj = new Class();
        this.physicsObjects.push(obj);
        this.entities[entityType].push(obj);
    }

    addMote() {
        let mote = new Mote();
        this.physicsObjects.push(mote);
        this.entities.critters.push(mote);
    }

}

export default Terrarium;