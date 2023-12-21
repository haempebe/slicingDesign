const toggler = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul")

toggler.addEventListener("click",function(){
    nav.classList.toggle('slide');
});