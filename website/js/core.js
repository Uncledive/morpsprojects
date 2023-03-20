window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("myNav").classList.add("fixed-top");
    document.getElementById("myNav").style.padding = "10px 3px";
    document.getElementById("logo2").style.height = "35px";
    
    } else {
    document.getElementById("myNav").classList.remove("fixed-top");
    document.getElementById("myNav").style.padding = "30px 10px";
    document.getElementById("logo2").style.height = "60px";

    }
}


let slideIndex = 0;
showSlides();

function showSlides() {
let i;
let slides = document.getElementsByClassName("mySlides");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 10000); // Change image every 10 seconds
}