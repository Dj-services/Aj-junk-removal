function toggleNav() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
  // Close nav on link click
  document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('nav').classList.remove('open');
    });
  });

  // Active nav link
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('#nav a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });

  // Scroll fade-in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
