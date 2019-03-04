console.log("reading js");

("use strict");

// get all articles as an array
var pages = document.querySelectorAll(".page");
var links = document.querySelectorAll("a");

// bind event listener to each link by traversing the array called "links"
for (var i=0; i<links.length; i++){
 links[i].addEventListener('click', function(event){
   console.log(event.currentTarget.id);

   // hide all pages
   hidePages();

   // show the associated article by concatenating a '#' before and a c' after the event.currentTarget.id
 document.querySelector('#' + event.currentTarget.id + 'c').classList.remove('hidden');
 })
}

// function to hide all articles
function hidePages() {
  for (var i = 0; i < pages.length; i++) {
    console.log('hide pages');
    pages[i].classList.add("hidden");
  }
}
