const nav = document.querySelector('#navigation');

function showNav(){
    nav.classList.add('show');
}

function hidewNav(){
    nav.classList.remove('show');
}
let currPos = window.scrollY;
document.addEventListener('scroll', () => {
  if (window.scrollY < currPos) {
  //scroll up
    hidewNav();
  } else {
  //scroll down
    showNav();
  }
  currPos = window.scrollY;
});