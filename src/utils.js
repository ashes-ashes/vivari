const Util = {
    addVectors: (vec1, vec2) => {
        return {x: (vec1.x + vec2.x), y: (vec1.y+vec2.y)}
    },
    findVector: (point1, point2) => {
        return {x: point2.x-point1.x, y: point2.y-point1.y}
    },
    frameThrottle: (delay, func, context, args1) => {

        let countdown = delay;
        
        return (args2) => {

            let args = Object.assign({}, args1, args2);

            if (countdown === 0) {
                func.apply(context, args)
                countdown = delay;
            } else {
                countdown--;
            }
        }
    }
};

export default Util;