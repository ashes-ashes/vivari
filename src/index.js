import properties from './properties';
import TerrariumView from './terrarium/terrarium_view';

window.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('vivari');
    let ctx = canvas.getContext("2d");
    let terrarium = new TerrariumView(ctx, canvas);
    terrarium.start();

    //testing on the window//
    window.terrarium = terrarium;
})