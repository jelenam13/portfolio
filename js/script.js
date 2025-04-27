/*typed text*/
const typed = new Typed('.multiple-text', {
    strings:['Concept Art', 'Illustration', 'Character design', 'Graphic design'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
/* scroll reveal*/ 
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.name', {origin: top});