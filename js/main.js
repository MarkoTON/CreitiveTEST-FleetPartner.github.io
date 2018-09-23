function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Menu Button X
function myMenuBtn(x) {
  x.classList.toggle("change");
}

function myMenuOverlay(overlayToogle){
  overlayToogle.classList.toggle("overlay-toggle");
}

// Nav Open
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
// Nav Close
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Slider Index 
let sliderImages = document.querySelectorAll(".slide"),
current = 0;// slideIndex
showSlides();

function showSlides(){
  
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
  current++;
  if(current > sliderImages.length) {current = 1}
  sliderImages[current - 1].style.display = "block";
  
  setTimeout(showSlides, 7000);
}