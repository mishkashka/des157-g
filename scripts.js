'use strict';
console.log('reading js');

document.querySelector('#submit').addEventListener('click', processForm);

function processForm(evt){
  var msgSection = document.querySelector('#msgSection');
  msgSection.innerHTMl= 'text';
  evt.preventDefault();
}
