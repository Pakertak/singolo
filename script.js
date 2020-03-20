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


HEADER_NAV.addEventListener('click', (event) => {

    HEADER_NAV.querySelectorAll('li').forEach(el=>el.classList.remove('navigation--item-selected'));

    if(event.target!=HEADER_NAV) 
        event.target.parentNode.classList.add('navigation--item-selected');

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

BUTTON_LEFT.addEventListener('click', ()=>{

    if(document.getElementById('slider1').classList.contains('hidden')) { 
        document.getElementById('slider2').classList.add('hidden'); 
        document.getElementById('slider1').classList.remove('hidden');
    }
    
    else {
        document.getElementById('slider2').classList.remove('hidden');
        document.getElementById('slider1').classList.add('hidden');
    }
});

BUTTON_RIGHT.addEventListener('click', ()=>{

    if(document.getElementById('slider1').classList.contains('hidden')) { 
        document.getElementById('slider2').classList.add('hidden'); 
        document.getElementById('slider1').classList.remove('hidden');
    }

    else {
        document.getElementById('slider2').classList.remove('hidden');
        document.getElementById('slider1').classList.add('hidden');
    }

});