
let navSide = document.getElementById("navSide");
let menuBtn = document.getElementById("menuBtn");
let menu = document.getElementById("menu");
navSide.style.right = "-300px";
menu.onclick = () => {
  if (navSide.style.right == "-300px") {
    navSide.style.right = "0";
    menu.src = "/photo/menu2.png";
    menuBtn.style.right = "240px";
    menuBtn.style.top = "24px";
  } else {
    navSide.style.right = "-300px";
    menu.src = "/photo/menu1.png";
    menuBtn.style.right = "1%";
    menuBtn.style.top = "24px";
  }
};
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      // console.log(hash);

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
    
  });
});