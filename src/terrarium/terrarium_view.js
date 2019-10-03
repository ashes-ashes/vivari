import Terrarium from './terrarium';
import properties from '../properties';
import Util from '../utils';

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
            this.ctx.clearRect(0, 0, properties.terrarium.width, properties.terrarium.height);
            this.terrarium.move();
            this.terrarium.draw(this.ctx);
        }, properties.window.tickLength);
        this.setupMouse();
    }

    setupMouse() {
        this.canvas.addEventListener('mousemove', (e) => {
            this.mousePos.x = e.clientX - properties.game.offset.x;
            this.mousePos.y = e.clientY - properties.game.offset.y;
            if (this.mouseDown = true) {
                this.terrarium.handleDrag(this.mousePos);
            }
        })
        this.canvas.addEventListener('mousedown', (e) => {
            this.mousePos.x = e.clientX - properties.window.offset.x;
            this.mousePos.y = e.clientY - properties.window.offset.y;
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