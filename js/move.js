/*
let title;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.009;
window.onload = function () {
title = document.getElementsByClassName("wrap")[0];

window.addEventListener("mousemove", T_MouseFunc, false);

function T_MouseFunc(e) {
    x = (e.clientX - window.innerWidth / 2);
    y = (e.clientY - window.innerHeight / 2);
    
    title.width = window.innerWidth ;
    title.height = window.innerHeight  ;
    }
    loop();

}

function loop() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    title.style.transform = "translate("+-(mx/80)+"px, "+-(my/80)+"px)";
    window.requestAnimationFrame(loop);
}
*/
