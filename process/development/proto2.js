'use strict';
console.log('reading js');
var itemCount = 0;
var pages = document.querySelectorAll(".page");

var banana = document.querySelector('#banana');
var bananaInfo = document.querySelector('#bananaInfo');
var bananaClose = document.querySelector('#bananaClose');
var bananaClick = false;

var journal = document.querySelector('#journal');
var journalInfo = document.querySelector('#journalInfo');
var journalClose = document.querySelector('#journalClose');
var journalClick = false;

var macbook = document.querySelector('#macbook');
var macbookInfo = document.querySelector('#macbookInfo');
var macbookClose = document.querySelector('#macbookClose');
var macbookClick = false;

var plant = document.querySelector('#plant');
var plantInfo = document.querySelector('#plantInfo');
var plantClose = document.querySelector('#plantClose');
var plantClick = false;

var shirt = document.querySelector('#shirt');
var shirtInfo = document.querySelector('#shirtInfo');
var shirtClose = document.querySelector('#shirtClose');
var shirtClick = false;

var bananaSide = document.querySelector('#bananaSide');
var journalSide = document.querySelector('#journalSide');
var macbookSide = document.querySelector('#macbookSide');
var plantSide = document.querySelector('#plantSide');
var shirtSide = document.querySelector('#shirtSide');


var sideBar = document.querySelector('#sidebar');

 function goHome(currentBedroom){
   window.location.reload()

}

function myFunction(button) {
    //console.log("this me", button.parentNode.id);
    let hidePageID;
    console.log(button);
    let stringVersion = "" + button;
    console.log(stringVersion);

    if ( stringVersion.includes("Button") ) {
      console.log("it should hit here but javascript might be funky")
      hidePageID = button.parentNode.id // Get the id of the parent so we can see which page we're on
    } else {
      hidePageID = button.parentNode.parentNode.id // Get the id of parent of the parent
    }

    console.log("new page", hidePageID);
    let string = "#" + hidePageID;
    var pageToHide = document.querySelector(string);

    pageToHide.addEventListener("click", function(event) {
      if (event.currentTarget.nextElementSibling.classList.contains("hide")) {
          event.currentTarget.classList.add("hide"); // Hide the current page
          event.currentTarget.nextElementSibling.classList.remove("hide"); // Show the next page
          console.log('displaying', event.currentTarget.nextElementSibling.id);
      }
    });
}

banana.addEventListener('click', playBanana);
journal.addEventListener('click', playJournal);
macbook.addEventListener('click', playMacbook);
plant.addEventListener('click', playPlant);
shirt.addEventListener('click', playShirt);

function checkIfDone() {
  itemCount += 1;
  if(itemCount == 5){
    //alert("Hi you're done");
    console.log("get inside the if statement")
    // Maung Notes: Make sure to style & create the alert box as you want and center it or something and if you want a button on it, makesure to have a <button onclick = > or something like that
    bedroom.innerHTML += '<div class="side1"> <img src = "images/banana.svg" width = "60" alt="banana" id="bananaSide" class="show, grow" /></div>'
    itemCount = 0;
  }
}

function playBanana() {
    console.log('click on banana');
    bananaInfo.classList.replace('hide', 'show');
    bananaClose.addEventListener('click', function() {
        bananaInfo.classList.replace('show', 'hide');
        banana.classList.replace('show', 'hide');
        checkIfDone();
        if (!bananaClick){
        sideBar.innerHTML += '<div class="side1"> <img src = "images/banana.svg" width = "60" alt="banana" id="bananaSide" class="show, grow" /></div>'
        bananaClick = true;
      }
      document.querySelector('#bananaSide').addEventListener('click',playBanana);

    });
}

function playJournal() {
    console.log('click on journal');
    journalInfo.classList.replace('hide', 'show');
    journalClose.addEventListener('click', function() {
        journalInfo.classList.replace('show', 'hide');
        closedBook.classList.replace('hide', 'show');
        journal.classList.replace('show', 'hide');
        checkIfDone();
        if (!journalClick){
          sideBar.innerHTML += '<div class="side2"> <img src="images/journal.svg" width="70" alt="journal" id="journalSide" class="show , grow" /></div>'
          journalClick = true;
        }
        document.querySelector('#journalSide').addEventListener('click',playJournal);
    });
}

function playMacbook() {
    console.log('click on laptop');
    macbookInfo.classList.replace('hide', 'show');
    macbookClose.addEventListener('click', function() {
        macbookInfo.classList.replace('show', 'hide');
        closedMacbook.classList.replace('hide', 'show');
        macbook.classList.replace('show', 'hide');
        checkIfDone();
        if (!macbookClick){
          sideBar.innerHTML += '<div class="side3"> <img src="images/macbook.svg" width="90" alt="macbook" id="macbookSide" class="show , grow" /></div>'
          macbookClick = true;
        }
        document.querySelector('#macbookSide').addEventListener('click',playMacbook);
});
}

function playPlant() {
    console.log('click on the plant');
    plantInfo.classList.replace('hide', 'show');
    plantClose.addEventListener('click', function() {
        plantInfo.classList.replace('show', 'hide');
        plant.classList.replace('show', 'hide');
        checkIfDone();
        if (!plantClick){
          sideBar.innerHTML += '<div class="side4"> <img src="images/plant.svg" width="60" alt="plant" id="plantSide" class="show , grow" /></div>'
          plantClick = true;
        }
        document.querySelector('#plantSide').addEventListener('click',playPlant);
});
}

function playShirt(){
    console.log('click on the shirt');
    shirtInfo.classList.replace('hide', 'show');
    shirtClose.addEventListener('click', function() {
        shirtInfo.classList.replace('show', 'hide');
        closet.classList.replace('hide', 'show');
        shirt.classList.replace('show', 'hide');
        checkIfDone();
        if (!shirtClick){
          sideBar.innerHTML +='<div class="side5"> <img src="images/shirt.svg" width="90" alt="shirt" id="shirtSide" class="show , grow" /></div>'
          shirtClick = true;
        }
        document.querySelector('#shirtSide').addEventListener('click',playShirt);
});
}
