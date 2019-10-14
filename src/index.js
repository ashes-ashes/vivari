import properties from './properties';
import TerrariumView from './terrarium/terrarium_view';

import './styles/reset.css';
import './styles/main.css';

const fetchWindowProps = (canvas) => {
    console.log(canvas);
    let props = canvas.getBoundingClientRect();
    console.log(props);
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
    terrarium.terrarium.addMote();

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

    window.addEventListener('resize', () => {
        fetchWindowProps(canvas);
    })
    
})