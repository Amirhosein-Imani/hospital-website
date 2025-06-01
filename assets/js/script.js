'use strict'

/** Add event listener on multiple elements **/ 

const addEventsOnElements = function(elements , eventType , callback) {

    for (let i = 0 , len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType , callback);
    }

}

/** Preloader **/ 
/** Preloader will be visible until document loads**/ 

const preloader = document.querySelector('[data-preloader]');

window.addEventListener('load' , function(){

    preloader.classList.add('loaded');
    document.body.classList.add('loaded');

})