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
    p.innerHTML = 'Items I need for class #1: I often listen to music or audiobooks on the bus ride to campus.';
})
lip.addEventListener('click', function() {
    overlay.style.display = 'block';
    p.innerHTML = 'Items I need for class #2: I make sure to apply lipbalm to keep my lips hydrated during this cold and dry winter.';
})
mint.addEventListener('click', function() {
    overlay.style.display = 'block';
    p.innerHTML = 'Items I need for class #3: If I am not drinking coffee, sucking on this Starbucks mint helps me stay up during class.';
})

close.addEventListener('click', function() {
    overlay.style.display = "none";
})
