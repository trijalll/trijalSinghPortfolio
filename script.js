var nav__respons__close = document.querySelector(".ri-close-circle-fill");
var nav__respons__container = document.querySelector(".navbar__menu__responsive")
nav__respons__close.addEventListener("click", function(){
    nav__respons__container.style.top = "-50vh";
    // alert("hello");
    // console.log("Hello")
})

var nav__menu__icon = document.querySelector(".ri-menu-3-fill");
nav__menu__icon.addEventListener('click', function(){
    nav__respons__container.style.top = "10vh"
})

var nav__logo = document.querySelector(".nav__logo")
nav__logo.addEventListener('click', function(){
    nav__respons__container.style.top = "-50vh";
})



var partFourCircle = document.querySelector(".part4__circle");

var part4 = gsap.timeline({scrollTrigger:{
    trigger: ".part4",
    start: "50% 50%",
    end: "100% 50%",
    scrub: true,
    duration: 1,
    // markers: true,
}})
part4.to(".part4__circle",{
    height: "100vw",
    width: "100vw",
})

var part4__cover = gsap.timeline({scrollTrigger:{
    trigger: ".part4",
    start: "90% 50%",
    end: "150% 100%",
    scrub: true,
    // markers: true,
}})
part4__cover.from(".part4__cover",{
    width: "80%",
    duration: 2,
    display: "none",
})
var part5 = gsap.timeline({scrollTrigger:{
    trigger: ".part5",
    start: "30% 50%",
    end: "80% 50%",
    scrub: true,
    duration: 1,
    // markers: true,
}})
part5.from(".part5__head",{
    y: 80,
    opacity: 0,
})
var part2Left = gsap.timeline({scrollTrigger:{
    trigger: ".part2",
    start: "10% 90%",
    end: "70% 90%",
    scrub: true,
    duration: 1,
    // markers: true,
}})
part2Left.from(".part2__cont__left",{
    x: -500,
})
var part2Right = gsap.timeline({scrollTrigger:{
    trigger: ".part2",
    start: "10% 90%",
    end: "70% 90%",
    scrub: true,
    duration: 1,
    // markers: true,
}})
part2Right.from(".part2__cont__right",{
    x: 500,
})