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
    },
    randInRange: (min, max) => {
        return Math.random() * (max - min) + min;
    },
    constructFrames: (width, height, numFrames) => {
        let frames = [];
        for (let i = 0; i < numFrames; i++) {
            frames.push({x: i*width, y: height})
        };
        return frames;
    },
    constructAgeFrames: (width, height, numFrames, numAges, ageSpacing) => {
        let ageFrames = {};
        let currentHeight = 0;
        for (let i = 0; i < numAges; i++) {
            ageFrames[i*ageSpacing] = Util.constructFrames(width, currentHeight, numFrames);
            currentHeight += height;
        };
        return ageFrames;
    },
};

export default Util;