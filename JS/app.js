/*
const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Blogger";
    }, 4000);
    setTimeout(() => {
        text.textContent = "YouTuber";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);
*/



window.addEventListener('load', () => {

    setTimeout(() => {
        document.querySelector('.astronaute').style.opacity = "1";
        document.querySelector('.dot').style.display="none";
    }, 1000);
    
})