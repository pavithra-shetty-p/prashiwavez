// Replace this with your real business email before launch.
const businessEmail = 'hello@example.com';
const emailLink = document.getElementById('contact-email');
emailLink.href = `mailto:${businessEmail}?subject=${encodeURIComponent('Hello PrashiWaveZ')}`;
document.getElementById('year').textContent = new Date().getFullYear();
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
