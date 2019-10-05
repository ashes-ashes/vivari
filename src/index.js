import properties from './properties';
import TerrariumView from './terrarium/terrarium_view';

import './styles/reset.css';
import './styles/main.css';




window.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('vivari');
    let ctx = canvas.getContext("2d");
    let terrarium = new TerrariumView(ctx, canvas);

    properties.window.offset.x = canvas.getBoundingClientRect().x;
    properties.window.offset.y = canvas.getBoundingClientRect().y;

    terrarium.start();
    terrarium.terrarium.addPhysicsObject(coin);

    setTimeout(() => {
        let p = document.getElementById('instructions1');
        p.classList.add('vis');

    }, 1000)

    setTimeout(() => {
        let p = document.getElementById('instructions2');
        p.classList.add('vis');
    }, 5000)

    setTimeout(() => {
        let links = document.getElementById('hireme');
        links.classList.add('vis');
    }, 9000)

    setTimeout(() => {
        let instructions = document.getElementsByClassName('instruction');
        Array.from(instructions).forEach((el) => {
            el.classList.remove('vis');
        }, 20000)
    })

    document.getElementById("???").addEventListener('click', () => {
        terrarium.terrarium.addMote();
    })
    
})