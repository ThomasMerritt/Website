const canvas = document.querySelector(".canvas");  
const navlinks = document.querySelector(".nav-links");
let caption = document.getElementById('caption');
let slider = document.getElementById('slider');
const tl = new TimelineMax();

const positivity = [
    "こんにちは",
    "stay frosty",
    "i'm here",
    "hola",
    "good day!",
    '<3',
    '(╯°□°)╯',
    'ノ( º _ ºノ)'
];

tl.fromTo(canvas,2, {height: "0%"}, {height: "80%", ease: Power3.easeInOut})
.fromTo(navlinks,.75, {height: "0%"}, {height: "8%", ease: Power1.easeInOut})

slider.classList.toggle('fade');
caption.classList.toggle('fade');

window.onload = function() {
    const CONTAINER = document.querySelector('.container')

    window.addEventListener('scroll', scrollEffect);

    function scrollEffect() {
        if (window.scrollY >= 150) {
            CONTAINER.style.opacity = '1';
            CONTAINER.style.transform = 'translateX(0px)';
            CONTAINER.style.transition = '1s ease-in-out';
        } else {
            CONTAINER.style.opacity = '0';
            CONTAINER.style.transform = 'translate(-20px)';
        }
    }
    scrollEffect();
} 

let captionIndex = 0;

let div = document.querySelector('.canvas');  

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let lastCaption = null;

function changeCaption() {
    shuffleArray(positivity);
    caption.style.opacity = '0';
    setTimeout(() => {
        let newCaption = positivity[captionIndex];
        if (newCaption === lastCaption && positivity.length > 1) {
            captionIndex = (captionIndex + 1) % positivity.length;
            newCaption = positivity[captionIndex];
        }
        caption.textContent = newCaption;
        lastCaption = newCaption;
        caption.style.opacity = '1';
        captionIndex = (captionIndex + 1) % positivity.length;

        let divRect = div.getBoundingClientRect();
        let top = Math.random() * (divRect.height / 2 - caption.offsetHeight) + divRect.top + divRect.height / 2;
        let left = divRect.left;  
        caption.style.top = `${top}px`;
        caption.style.left = `${left}px`;
    }, 1000); 
}

setInterval(changeCaption, 4000);
