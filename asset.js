const canvas = document.querySelector(".canvas");  
const slider = document.querySelector(".slider");  
const navlinks = document.querySelector(".nav-links");
let hamburger = document.getElementById('hamburger');
let link = document.getElementById('link');

const tl = new TimelineMax();

tl.fromTo(canvas,1.5, {height: "15%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(navlinks,.75, {height: "0%"}, {height: "8%"})
.fromTo(slider,1, {x:"-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=.8");


