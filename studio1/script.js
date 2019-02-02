'use strict';
console.log('reading js');

document.querySelector('#submit').addEventListener('click', processForm);
document.querySelector('#reset').addEventListener('click', resetForm);

//var myMsg = document.querySelector('#myMsg');
//var msgSection = document.querySelector('#msgSection');

//define process function
function processForm(evt) {
    var noun8 = document.querySelector('#noun8').value;
    var noun7 = document.querySelector('#noun7').value;
    var noun4 = document.querySelector('#noun4').value;
    var myMsg = document.querySelector('#myMsg');
    var msgSection = document.querySelector('#msgSection');
    // message //
    myMsg.innerHTML = 'Your orderdered a ' + noun8 + ' in size ' + noun7 + ' with dash of ' + noun4 + '. Thank you for your order!';

    msgSection.className = 'show';
    console.log('texxx');
    // prevent page from reloading
    evt.preventDefault();
    //return false;
}

function resetForm() {
    var msgSection = document.querySelector('#msgSection');
    msgSection.className = 'hide';
}
