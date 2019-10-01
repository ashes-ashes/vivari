import Terrarium from './terrarium';
import properties from '../properties';

class TerrariumView {
    constructor(ctx, canvas) {
        this.terrarium = new Terrarium();
        this.ctx = ctx;
        this.canvas = canvas;
        this.mousePos = {x: null, y: null};
        this.mouseDown = false;

        this.setupMouse.bind(this);
    }

    start() {
        setInterval(() => {
            this.terrarium.move();
            this.terrarium.draw(this.ctx);
        }, 20);
    }

    setupMouse() {
        this.canvas.addEventListener('mousemove', (e) => {
            this.mousePos.x = e.clientX - properties.game.offset.x;
            this.mousePos.y = e.clientY - properties.game.offset.y;
            
        })
        this.canvas.addEventListener('mousedown', (e) => {
            this.terrarium.handleMouseDown(this.mousePos);
            this.mouseDown = true;
        })
        this.canvas.addEventListener('mouseup', (e) => {
            this.terrarium.handleMouseUp(this.mousePos);
            this.mouseDown = false;
        })
    }

}

export default TerrariumView;