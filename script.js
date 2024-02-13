// Use let instead of var for block scope
let hue;

// Use arrow functions for cleaner syntax
const triggerAnimation = (event, element) => {
  event.stopPropagation();
  element.classList.add('active');
  setTimeout(() => {
    element.classList.remove('active');
  }, 1300);
}

const colorize = () => {
  hue = Math.random() * 360;
  return `HSL(${hue},100%,50%)`;
}



new SimpleBar(document.querySelector('.wrapper'));

const icons = document.querySelectorAll('.icon');

icons.forEach((icon) => {
  const sonarEffect = document.createElement('div');
  sonarEffect.classList.add('sonar-effect');
  icon.appendChild(sonarEffect);

  icon.addEventListener('mouseenter', () => {
    const effect = icon.querySelector('.sonar-effect');
    effect.style.animation = 'none';
    void effect.offsetWidth;
    effect.style.animation = 'sonar 1s ease-out';
  });
});

function openPopup() {
  document.getElementById("contactPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("contactPopup").style.display = "none";
}

function openLink() {
  var link = document.querySelector('.btn_link').href;
  window.open(link, '_blank');
}