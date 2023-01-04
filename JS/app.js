window.addEventListener('load', () => {

    setTimeout(() => {
        document.querySelector('.astronaute').style.opacity = "1";
        document.querySelector('.dot').style.display="none";
    }, 500);

})

//--------------------------------------------------------------------------------------

let btn1 = document.querySelector('.btn-animation1');
let p1 = document.querySelector('.btn-animation1 p');
let bar1 = document.querySelectorAll('.btn-animation1 .bar1');

let btn2 = document.querySelector('.btn-animation2');
let p2 = document.querySelector('.btn-animation2 p');
let bar2 = document.querySelectorAll('.btn-animation2 .bar2');

let btn3 = document.querySelector('.btn-animation3');
let p3 = document.querySelector('.btn-animation3 p');
let bar3 = document.querySelectorAll('.btn-animation3 .bar3');
var i;

console.log(document.querySelector('.threebox-container :nth-child(2) :nth-child(1)'));
console.log(document.querySelector('.btn-animation .bar1'));


btn1.addEventListener('click', () => {
    btn1.style.animation="jsanimation1 .5s .3s forwards";

    p1.style.animation="jsanimation2 .5s forwards";

    for (i = 0; i < bar1.length; i++) {
        bar1[i].style.animation="jsanimation5 .5s .8s forwards";
    }

    setTimeout(() => {
        btn1.style.opacity = "0";
    }, 1400);

    document.querySelector('.threebox-container div:nth-child(1) div:nth-child(1)').style.backdropFilter="blur(0)";

    setTimeout(() => {
        btn1.style.display="none";
        for (i = 0; i < bar1.length; i++) {
            bar1[i].style.display="none";
        }
    }, 1500);
})

btn2.addEventListener('click', () => {
    btn2.style.animation="jsanimation1 .5s .3s forwards";

    p2.style.animation="jsanimation2 .5s forwards";

    for (i = 0; i < bar2.length; i++) {
        bar2[i].style.animation="jsanimation5 .5s .8s forwards";
    }

    setTimeout(() => {
        btn2.style.opacity = "0";
    }, 1400);

    document.querySelector('.threebox-container div:nth-child(2) div:nth-child(1)').style.backdropFilter="blur(0)";

    setTimeout(() => {
        btn2.style.display="none";
        for (i = 0; i < bar2.length; i++) {
            bar2[i].style.display="none";
        }
    }, 1500);
})

btn3.addEventListener('click', () => {
    btn3.style.animation="jsanimation1 .5s .3s forwards";

    p3.style.animation="jsanimation2 .5s forwards";

    for (i = 0; i < bar3.length; i++) {
        bar3[i].style.animation="jsanimation5 .5s .8s forwards";
    }

    setTimeout(() => {
        btn3.style.opacity = "0";
    }, 1400);

    document.querySelector('.threebox-container div:nth-child(3) div:nth-child(1)').style.backdropFilter="blur(0)";

    setTimeout(() => {
        btn3.style.display="none";
        for (i = 0; i < bar3.length; i++) {
            bar3[i].style.display="none";
        }
    }, 1500);
})