'use strict';
console.log('reading js');
//global variables
var airpod = document.querySelector('#airpod');
var overlay = document.querySelector('#overlay');
var p = document.querySelector('#overlay p');
var close = document.querySelector('#close');

var lip = document.querySelector('#lip');
var mint = document.querySelector('#mint');

airpod.addEventListener('click', function() {
    overlay.style.display = 'block';
    p.innerHTML='I just bought Rocket airpods and they got lost in the mail';
})
lip.addEventListener('click', function() {
    overlay.style.display = 'block';
      p.innerHTML='I just bought Rocket airpods and they got lost in the mail';
})
mint.addEventListener('click', function() {
    overlay.style.display = 'block';
      p.innerHTML='I just bought Rocket airpods and they got lost in the mail';
})

close.addEventListener('click', function() {
    overlay.style.display = "none";
})
