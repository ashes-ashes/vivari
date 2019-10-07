

const properties = {
    window: {
        offset: {
            x: 0,
            y: 0,
        },
        height: 500,
        width: 800,
        tickLength: 20,
        frameLength: 5
    },
    terrarium: {
        height: 500,
        width: 800,
        groundHeight: 400,
    },
    physics: {
        gravity: { x: 0, y: 3 },
        impact: 3,
        groundFriction: 2,
    },
    sidebar: {
        width: 200,
    }
}

export default properties;