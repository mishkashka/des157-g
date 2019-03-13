'use strict';
console.log('reading js');
var pages = document.querySelectorAll(".page");

var banana = document.querySelector('#banana');
var bananaInfo = document.querySelector('#bananaInfo');
var bananaClose = document.querySelector('#bananaClose');

var journal = document.querySelector('#journal');
var journalInfo = document.querySelector('#journalInfo');
var journalClose = document.querySelector('#journalClose');

var macbook = document.querySelector('#macbook');
var macbookInfo = document.querySelector('#macbookInfo');
var macbookClose = document.querySelector('#macbookClose');

var plant = document.querySelector('#plant');
var plantInfo = document.querySelector('#plantInfo');
var plantClose = document.querySelector('#plantClose');

var shirt = document.querySelector('#shirt');
var shirtInfo = document.querySelector('#shirtInfo');
var shirtClose = document.querySelector('#shirtClose');

for (let page of pages) {
  page.addEventListener("click", function(event) {
    // recall event.target (triggering event) vs event.currentTarget(=this, current element running handler, usually on bubbling)
    // only advances if next sibling element is hidden, so we don't hide the last page
    if (event.currentTarget.nextElementSibling.classList.contains("hidden")) {
      // hides the current page
      event.currentTarget.classList.add("hidden");
      // takes action on the next sibling element, vs nextSibling which may return text/whitespace nodes
      event.currentTarget.nextElementSibling.classList.remove("hidden");
      console.log('displaying', event.currentTarget.nextElementSibling.id);
      // another approach might directly change element.style.display
    }
  });
}

banana.addEventListener('click', function() {
    console.log('click on banana');
    bananaInfo.classList.replace('hide', 'show');
    bananaClose.addEventListener('click', function() {
        bananaInfo.classList.replace('show', 'hide');
        banana.classList.replace('show', 'hide');
    })
});

journal.addEventListener('click', function() {
    console.log('click on journal');
    journalInfo.classList.replace('hide', 'show');
    journalClose.addEventListener('click', function() {

        journalInfo.classList.replace('show', 'hide');
        journal.classList.replace('show', 'hide');
    })
});

macbook.addEventListener('click', function() {
    console.log('click on laptop');
    macbookInfo.classList.replace('hide', 'show');
    macbookClose.addEventListener('click', function() {
        macbookInfo.classList.replace('show', 'hide');
        macbook.classList.replace('show', 'hide');
    })
});

plant.addEventListener('click', function() {
    console.log('click on the plant');
    plantInfo.classList.replace('hide', 'show');
    plantClose.addEventListener('click', function() {
        plantInfo.classList.replace('show', 'hide');
        plant.classList.replace('show', 'hide');
    })
});

shirt.addEventListener('click', function() {
    console.log('click on the shirt');
    shirtInfo.classList.replace('hide', 'show');
    shirtClose.addEventListener('click', function() {
        shirtInfo.classList.replace('show', 'hide');
        shirt.classList.replace('show', 'hide');
    })
});
