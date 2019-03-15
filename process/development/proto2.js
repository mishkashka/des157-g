'use strict';
console.log('reading js');
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


function myFunction() {
    for (let page of pages) {
        page.addEventListener("click", function(event) {
            console.log('page');
            if (event.currentTarget.nextElementSibling.classList.contains("hide")) {
                event.currentTarget.classList.add("hide");
                event.currentTarget.nextElementSibling.classList.remove("hide");
                console.log('displaying', event.currentTarget.nextElementSibling.id);

            }
        });
    }
}

banana.addEventListener('click', playBanana);
journal.addEventListener('click', playJournal);
macbook.addEventListener('click', playMacbook);
plant.addEventListener('click', playPlant);
shirt.addEventListener('click', playShirt);

function playBanana() {
    console.log('click on banana');
    bananaInfo.classList.replace('hide', 'show');
    bananaClose.addEventListener('click', function() {
        bananaInfo.classList.replace('show', 'hide');
        banana.classList.replace('show', 'hide');
        if (!bananaClick){
        sideBar.innerHTML += '<div class="side1"> <img src = "images/banana.svg" width = "60" alt="banana" id="bananaSide" class="show, grow" /></div>'
        bananaClick = true;
      }
      document.querySelector('#bananaSide').addEventListener('click',playBanana);
      // check how many images are in the sideBar
      // var sideBarImgs = document.querySelectorAll('#sidebar img')
      // if (sideBarImgs.length == 5) {console.log('show finish screen')};
    });
}

function playJournal() {
    console.log('click on journal');
    journalInfo.classList.replace('hide', 'show');
    journalClose.addEventListener('click', function() {
        journalInfo.classList.replace('show', 'hide');
        journal.classList.replace('show', 'hide');
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
        if (!shirtClick){
          sideBar.innerHTML +='<div class="side5"> <img src="images/shirt.svg" width="90" alt="shirt" id="shirtSide" class="show , grow" /></div>'
          shirtClick = true;
        }
        document.querySelector('#shirtSide').addEventListener('click',playShirt);
});
}
// bananaSide.addEventListener('click', function() {
//     console.log('click on banana');
//     bananaInfo.classList.replace('hide', 'show');
//     bananaClose.addEventListener('click', function() {
//         bananaInfo.classList.replace('show', 'hide');
//         bananaSide.classList.replace('show', 'hide');
//     })
// });
//
// journalSide.addEventListener('click', function() {
//     console.log('click on journal');
//     journalInfo.classList.replace('hide', 'show');
//     journalClose.addEventListener('click', function() {
//
//         journalInfo.classList.replace('show', 'hide');
//         journalSide.classList.replace('show', 'hide');
//     })
// });
//
// macbookSide.addEventListener('click', function() {
//     console.log('click on laptop');
//     macbookInfo.classList.replace('hide', 'show');
//     macbookClose.addEventListener('click', function() {
//         macbookInfo.classList.replace('show', 'hide');
//         macbookSide.classList.replace('show', 'hide');
//     })
// });
//
// plantSide.addEventListener('click', function() {
//     console.log('click on the plant');
//     plantInfo.classList.replace('hide', 'show');
//     plantClose.addEventListener('click', function() {
//         plantInfo.classList.replace('show', 'hide');
//         plantSide.classList.replace('show', 'hide');
//     })
// });
//
// shirtSide.addEventListener('click', function() {
//     console.log('click on the shirt');
//     shirtInfo.classList.replace('hide', 'show');
//     shirtClose.addEventListener('click', function() {
//         shirtInfo.classList.replace('show', 'hide');
//         shirtSide.classList.replace('show', 'hide');
//     })
// });
