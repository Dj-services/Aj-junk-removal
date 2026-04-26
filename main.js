function toggleNav() {
  document.getElementById('nav').classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('nav').classList.remove('open');
    });
  });

  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('#nav a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
