'use strict';
console.log('reading js');

var myroom = document.querySelector('#myroom');
var bedroomInfo = document.querySelector('#bedroomInfo');
var bedroomClose = document.querySelector('#bedroomClose');


myroom.addEventListener('click',function(){
  console.log('click on bedroom');
  bedroomInfo.classList.replace('hide', 'show');
  bedroomClose.addEventListener('click', function(){
    bedroomInfo.classList.replace('show','hide');
    myroom.classList.replace('show','hide');
  })
});
