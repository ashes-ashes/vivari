import properties from './properties';
import TerrariumView from './terrarium/terrarium_view';

import './styles/reset.css';
import './styles/main.css';

// testing on window //
import EtomatSeed from './objects/life/plant/etomat/etomat_seed';
import ObberrySeed from './objects/life/plant/obberry/obberry_seed';
import SluggoEgg from './objects/life/critter/sluggo/sluggo_egg';

const fetchWindowProps = (canvas) => {
    let props = canvas.getBoundingClientRect();
    properties.window.offset.x = props.x;
    properties.window.offset.y = props.y;
    properties.window.height = props.height;
    properties.window.width = props.width;
}


window.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('vivari');
    let ctx = canvas.getContext("2d");
    let terrarium = new TerrariumView(ctx, canvas);

    fetchWindowProps(canvas);

    terrarium.start();

    // setTimeout(() => {
    //     let p = document.getElementById('instructions1');
    //     p.classList.add('vis');

    // }, 1000)

    // setTimeout(() => {
    //     let p = document.getElementById('instructions2');
    //     p.classList.add('vis');
    // }, 3000)

    setTimeout(() => {
        let links = document.getElementById('hireme');
        links.classList.add('vis');
    }, 5000)

    // setTimeout(() => {
    //     let instructions = document.getElementsByClassName('instruction');
    //     Array.from(instructions).forEach((el) => {
    //         el.classList.remove('vis');
    //     }, 5000)
    // })

    document.getElementById("???").addEventListener('click', () => {
        terrarium.terrarium.addMote();
    })

    // document.getElementById("debugbutton").addEventListener('click', () => {
    //     properties.dev.debug = true;
    //     let box = document.getElementById("instructionsbox");
    //     box.classList.add('debug');
    //     setInterval(() => {
    //         box.innerText = JSON.stringify(properties.dev.focus, null, 2);
    //     }, 20);
    // })
    
        document.getElementById("motebutton").addEventListener('click', () => {
            terrarium.terrarium.addMoteEgg();
        })

    document.getElementById("etomatbutton").addEventListener('click', () => {
        terrarium.terrarium.spawnObject(EtomatSeed, 'eggs');
    })

    document.getElementById("sluggobutton").addEventListener('click', () => {
        terrarium.terrarium.spawnObject(SluggoEgg, 'eggs');
    })

    document.getElementById("obberrybutton").addEventListener('click', () => {
        terrarium.terrarium.spawnObject(ObberrySeed, 'eggs');
    })

    window.addEventListener('resize', () => {
        fetchWindowProps(canvas);
    })
    
})