'use strict';
console.log('reading js');

document.querySelector('#s').addEventListener('click', processForm);

//define process function
function processForm(evt){
    var verbing = document.querySelector('#verbing').value;
    var noun1 = document.querySelector('#noun1').value;
    var noun2 = document.querySelector('#noun2').value;
    var adjective1 = document.querySelector('#adjective1').value;
    var adjective2 = document.querySelector('#adjective2').value;
    var noun3 = document.querySelector('#noun3').value;
    var profession = document.querySelector('#profession').value;
    var kind = document.querySelector('#kind').value;
    var size = document.querySelector('#size').value;
    var noun8 = document.querySelector('#noun8').value;
    var kind = document.querySelector('#kind').value;
    var noun7 = document.querySelector('#noun7').value;
    var noun4 = document.querySelector('#noun4').value;
    var facialfeature = document.querySelector('#facialfeature').value;
    var verb = document.querySelector('#verb').value;
    var noun = document.querySelector('#noun').value;
    var adjective3 = document.querySelector('#adjective3').value;
    var noun6 = document.querySelector('#noun6').value;

    var myMsg = document.querySelector('#myMsg');
    // message //
    myMsg.innerHTMl = 'It was Sunday afternoon. She was sitting alone ' + verbing + ' a ' + noun1 + ' at her local coffee shop named ' +
        noun2 + '. The door opens. He walks in. He was ' + adjective1 + ' and ' + adjective2 + '. He is carrying a ' + noun3 +
        ' He must be a ' + profession + ' she thought to herself. He walks up to the barista and orders ' + kind + ' size ' + size +
        ' ,dash of ' + noun8 ' and add of ' + noun7 '. He notices her sitting in the corner, and sits on a ' + noun4 + ' beside her. He gazes her in the ' +
        facialfeature + ' and ' + verb ' . It was love at first ' + noun ' . He wonders what she ordered. A ' + adjective3 +
        ' smell was coming from her cup. He realised she ordered the same drink! They were match made in ' + noun6 + '.';

    // prevent page from reloading
    evt.preventDefault();
}
