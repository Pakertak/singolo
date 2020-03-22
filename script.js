const HEADER_NAV = document.getElementById('headerNav');
const PORTFOLIO_MENU = document.getElementById('portfolioMenu');
const BUTTON = document.getElementById('button');
const CLOSE_BUTTON = document.getElementById('closeButton'); 
const IMGS_CONTAINER = document.getElementById('imgsContainer');
const PORTFOLIO_ALL = document.getElementById('all');
const PORTFOLIO_WEB_DESIGN = document.getElementById('webDesign');
const PORTFOLIO_GRAPHIC_DESIGN = document.getElementById('graphicDesign');
const PORTFOLIO_ARTWORK = document.getElementById('artwork');
const BUTTON_VERTICAL = document.getElementById('buttonVertical');
const BUTTON_HORIZONTAL = document.getElementById('buttonHorizontal');
const BUTTON_LEFT = document.getElementById('left');
const BUTTON_RIGHT = document.getElementById('right');


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


window.addEventListener('scroll', function(){
    
    switch(true){
        case window.pageYOffset < 610:  HEADER_NAV.querySelectorAll('li').forEach(element => element.classList.remove('navigation--item-selected')); 
        HEADER_NAV.querySelectorAll('li')[0].classList.add('navigation--item-selected'); break;
        case (window.pageYOffset >= 610 && window.pageYOffset < 1110):  HEADER_NAV.querySelectorAll('li').forEach(element => element.classList.remove('navigation--item-selected')); 
        HEADER_NAV.querySelectorAll('li')[2].classList.add('navigation--item-selected'); break;
        case (window.pageYOffset < 1970 && window.pageYOffset > 1110):  HEADER_NAV.querySelectorAll('li').forEach(element => element.classList.remove('navigation--item-selected')); 
        HEADER_NAV.querySelectorAll('li')[4].classList.add('navigation--item-selected'); break;
        case (window.pageYOffset < 2710 && window.pageYOffset > 1970):  HEADER_NAV.querySelectorAll('li').forEach(element => element.classList.remove('navigation--item-selected')); 
        HEADER_NAV.querySelectorAll('li')[6].classList.add('navigation--item-selected'); break;
        case window.pageYOffset > 2710:  HEADER_NAV.querySelectorAll('li').forEach(element => element.classList.remove('navigation--item-selected')); 
        HEADER_NAV.querySelectorAll('li')[8].classList.add('navigation--item-selected'); break; 
    }
    
});

PORTFOLIO_MENU.addEventListener('click', (event) => {

    PORTFOLIO_MENU.querySelectorAll('li').forEach(el=>el.classList.remove('nav-item--selected'));

    if(event.target!=PORTFOLIO_MENU) 
        event.target.parentNode.classList.add('nav-item--selected');
});


BUTTON.addEventListener("click", (event) => {
    let requiredFields = [...document.querySelectorAll("[required]")];
    let isValid = node => node.checkValidity();
  
    //Check if all required fields filled with valid data
    if ( requiredFields.every(isValid) ) {

      event.preventDefault();
      const subject = document.getElementById('subject').value.toString();
        if(subject!='') document.getElementById('resultSubject').innerText = ("Тема: " + subject);
        else document.getElementById('resultSubject').innerText = 'Без темы';
        const description = document.getElementById('description').value.toString();
        if(description!='') document.getElementById('resultDescription').innerText = ("Описание: " + description);
        else document.getElementById('resultDescription').innerText = 'Без описания';
        document.getElementById('messageBlock').classList.remove('hidden');
    }
  });

CLOSE_BUTTON.addEventListener('click', () => {

    document.getElementById('form').reset();
    document.getElementById('resultSubject').innerText = '';
    document.getElementById('resultDescription').innerText = '';
    document.getElementById('messageBlock').classList.add('hidden');

});

IMGS_CONTAINER.addEventListener('click', (event) => {

    IMGS_CONTAINER.querySelectorAll('div').forEach(el => el.classList.remove('img--selected'));
    if( event.target!=IMGS_CONTAINER ) event.target.classList.add('img--selected');

});
 
PORTFOLIO_ALL.addEventListener('click', () => { 
    IMGS_CONTAINER.querySelectorAll('div').forEach((element, i) => {
        for(let j = 0; j < 11; j++)
        element.classList.remove('img' + j);
        element.classList.add('img' + i);
   });
});

PORTFOLIO_WEB_DESIGN.addEventListener('click', () => {
    IMGS_CONTAINER.querySelectorAll('div').forEach((element, i) => {
        for(let j = 0; j < 11; j++)
        element.classList.remove('img' + j);
        element.classList.remove('img' + i);
        element.classList.add('img' + Math.floor(Math.random() * Math.floor(11)));
   }); 
});

PORTFOLIO_GRAPHIC_DESIGN.addEventListener('click', () => {
    IMGS_CONTAINER.querySelectorAll('div').forEach((element, i)=>{

        for(let j = 0; j < 11; j++)
        element.classList.remove('img' + j);

        element.classList.remove('img' + i);
        element.classList.add('img' + Math.floor(Math.random() * Math.floor(11)));

   });
});

PORTFOLIO_ARTWORK.addEventListener('click', ()=>{
    IMGS_CONTAINER.querySelectorAll('div').forEach((element, i)=>{

        for(let j = 0; j < 11; j++)
        element.classList.remove('img' + j);

        element.classList.remove('img' + i);
        element.classList.add('img' + Math.floor(Math.random() * Math.floor(11)));

   }); 
});

BUTTON_VERTICAL.addEventListener('click', ()=>{

    if(!document.getElementById('windowVertical').classList.contains('windowOff')) 
        document.getElementById('windowVertical').classList.add('windowOff');

    else 
        document.getElementById('windowVertical').classList.remove('windowOff');
});

BUTTON_HORIZONTAL.addEventListener('click', ()=>{

    if(!document.getElementById('windowHorizontal').classList.contains('windowOff')) 
        document.getElementById('windowHorizontal').classList.add('windowOff');

    else 
        document.getElementById('windowHorizontal').classList.remove('windowOff');
});


let items = document.querySelectorAll('.slider-item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
};

function hideItem(direction){
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('active', direction);
    });
};

function showItem(direction){
    isEnabled = false;
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
};

function previousItem(n){
    hideItem('to-left');
    changeCurrentItem(n-1);
    showItem('from-right');
};

function nextItem(n){
    hideItem('to-right');
    changeCurrentItem(n+1);
    showItem('from-left');
};

BUTTON_LEFT.addEventListener('click', function () {
    
    if(isEnabled) {
        previousItem(currentItem);
    }

});

BUTTON_RIGHT.addEventListener('click', function(){

    if(isEnabled) {
        nextItem(currentItem);
    }

});