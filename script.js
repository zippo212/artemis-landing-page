const nav = document.querySelector('#navigation');
const root_theme = document.querySelector(':root');


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

// Accordion
function myAccord(idP,idImg) {
  let whyPara = document.getElementById(idP);
  let whyImg = document.getElementById(idImg);
  whyPara.classList.toggle('show-para')
  whyImg.classList.toggle('img-op')
}

const element = document.querySelector('.we-go');
const element2 = document.querySelector('#mission');
const observer = new IntersectionObserver(entries => {
  element.classList.toggle( 'showtext', entries[0].isIntersecting );
});

observer.observe( element2 );

function showInfo() {
  root_theme.style.setProperty('--rtl', 'translateX(0)'); 
  root_theme.style.setProperty('--ltr', 'translateX(0)'); 
}