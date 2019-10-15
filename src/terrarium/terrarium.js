import PhysicsObject from '../objects/physics_object';
import Mote from '../objects/life/critter/mote/mote';
import MoteEgg from '../objects/life/critter/mote/mote_egg';
import Util from '../utils';
import properties from '../properties';


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
        this.addObject = this.addObject.bind(this);
        this.spawnObject = this.spawnObject.bind(this);
        this.removePhysicsObject = this.removePhysicsObject.bind(this);
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
        this.handleEggs();
    }

    addPhysicsObject(obj) {
        this.physicsObjects.push(obj);
    }
    
    removePhysicsObject(trash) {
        let idx = this.physicsObjects.indexOf(trash);
        this.physicsObjects.splice(idx, 1);
    }

    handleMouseDown(mousePos) {

        let target = this.physicsObjects.find((obj) => 
            obj.doesContainPoint(mousePos)
        );

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

    addObject(object, entityType) {
        this.physicsObjects.push(object);
        if (entityType !== undefined) {
            this.entities[entityType].push(object);
        }
    }

    spawnObject(Class, entityType) {
        let obj = new Class();
        this.addObject(obj, entityType);
    }

    addMote() {
        let mote = new Mote();
        this.physicsObjects.push(mote);
        this.entities.critters.push(mote);
    }

    addMoteEgg() {
        this.spawnObject(MoteEgg, 'eggs');
    }

    handleEggs() {
        this.entities.eggs.forEach((egg, idx) => {
            if (egg.isHatchable()) {
                this.addObject(egg.hatch(), egg.entityType);
                this.entities.eggs.splice(idx, 1);
                this.removePhysicsObject(egg);
            }
        })
    }


}

export default Terrarium;