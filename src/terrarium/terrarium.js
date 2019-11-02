import PhysicsObject from '../objects/physics_object';

import Util from '../utils';
import properties from '../properties';

import Mote from '../objects/life/critter/mote/mote';
import MoteEgg from '../objects/life/critter/mote/mote_egg';

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
            if (obj.isTrash) {
                this.removePhysicsObject(obj);
            }
            obj.move();
        });
        this.physicsObjects.sort((a, b) => {
            return a.pos.x - b.pos.x;
        })
        this.handleEggs();
        this.handleFruiting();
        this.handleCritters();
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
            obj.doesContainPoint(mousePos) && obj.draggable === true
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

    handleFruiting() {
        this.entities.plants.forEach((plant) => {
            if (plant.age >= plant.matureAge) {
                if (plant.fruitCountdown <= 0) {
                    this.spawnFruit(plant);
                } else if (plant.hasFruit === false) {
                    plant.fruitCountdown--;
                }
            }
        })
    }

    handleCritters() {
        this.entities.critters.forEach((critter) => {
            this.handleFocus(critter)
        })
    }

    handleFocus(critter) {
        if (critter.isHungry() && !critter.isFocused()) {
            if (this.entities.fruit.length > 0) {
                let closestFruit = this.entities.fruit.reduce((a, b) => {
                    return Math.abs(a.pos.x - critter.pos.x) < Math.abs(b.pos.x - critter.pos.x) ? a : b
                })
                critter.setFocus(closestFruit);
            }
        } else if (!critter.isHungry() && critter.isFocused()) {
            critter.setFocus(null);
        }
    }

    handleEat() {
        
    }

    spawnFruit(plant) {
        if (plant.isMature() && plant.hasFruit === false) {
            let fruit = new plant.FruitClass({
                pos: { x: plant.pos.x + plant.fruitPos.x, y: plant.pos.y + plant.fruitPos.y },
                parentPlant: plant
            });
            this.addObject(fruit, 'fruit');
            plant.hasFruit = true;
            plant.fruitCountdown = plant.fruitTime;
            console.log(this);
        }
    }


}

export default Terrarium;