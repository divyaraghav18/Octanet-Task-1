// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('#testimonial-slider > div');
setInterval(() => {
  testimonials[currentTestimonial].style.transform = 'translateX(-100%)';
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].style.transform = 'translateX(0)';
}, 3000);

// Navbar Scroll Change
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Contact Form Validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;

  if (name && email && message) {
    alert('Message sent!');
  } else {
    alert('Please fill in all fields.');
  }
});
