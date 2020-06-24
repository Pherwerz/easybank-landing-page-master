import './main.scss';

const navButton = document.querySelector('.header__btn');
const nav = document.querySelector('.header__navigation');
const img = document.querySelector('#img');
let tracker = true;

navButton.addEventListener('click', () => {
  if (tracker) {
    img.src = './img/icon-close.svg';
    nav.style.visibility = 'visible';
    nav.style.opacity = '1';
    tracker = false;
  } else {
    img.src = './img/icon-hamburger.svg';
    nav.style.visibility = 'hidden';
    nav.style.opacity = '0';
    tracker = true;
  }
});
