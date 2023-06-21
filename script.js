function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    var menu = document.querySelector(".menu");
    var lines = document.querySelectorAll(".line");
  
    navLinks.classList.toggle("nav-active");
    menu.classList.toggle("toggle");
  
    lines.forEach((line, index) => {
      line.classList.toggle("line" + (index + 1));
    });
  }