document.addEventListener('DOMContentLoaded', function() {

  /* Typed.js efekat */
  const typed = new Typed('.multiple-text', {
    strings: ['Concept Art', 'Illustration', 'Character design', 'Graphic design'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  /* ScrollReveal podešavanja */
  ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.name', { origin: 'top' });

  /* Selektovanje elemenata */
  const header = document.querySelector('header .one');
  const twoSection = document.querySelector('.two');
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');

  /* Intersection Observer za menjanaje headera kad skrolujemo */
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }, {
    root: null,
    threshold: 0.08 // Kada 8% sekcije ostane u viewportu
  });

  observer.observe(twoSection);

  /* Klik na meni ikonu */
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  });

  /* Scroll Event */
  window.addEventListener('scroll', () => {
    let top = window.scrollY;

    sections.forEach(sec => {
      let offset = sec.offsetTop - 100; // malo pre nego što sekcija počne
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      }
    });

    // Kada se skroluje zatvara meni na mobilnim
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });

});
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;

  fetch(form.action, {
      method: form.method,
      body: new FormData(form),
  }).then(response => {
      if (response.ok) {
          showSuccess();
          form.reset();
      } else {
          alert("Message failed. Please try again.");
      }
  });
});

function showSuccess() {
  const msg = document.getElementById("success-message");
  msg.classList.add("show");
  msg.classList.remove("hidden");
  setTimeout(() => {
      msg.classList.remove("show");
      msg.classList.add("hidden");
  }, 2000);
}
function setVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVh();
window.addEventListener('resize', setVh);