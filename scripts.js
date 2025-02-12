function scrollToTop() {
  var top = document.body;
  top.scrollIntoView({ behavior: "smooth" });
}

function scrollToOffer() {
  var footer = document.getElementById("offer");
  footer.scrollIntoView({ behavior: "smooth" });
}

function scrollToGallery() {
  var gallery = document.getElementById("gallery");
  gallery.scrollIntoView({ behavior: "smooth" });
}

function scrollToAbout() {
  var footer = document.getElementById("about");
  footer.scrollIntoView({ behavior: "smooth" });
}

function scrollToFooter() {
  var footer = document.getElementById("footer");
  footer.scrollIntoView({ behavior: "smooth" });
}




document.addEventListener("DOMContentLoaded", function () {

  window.onscroll = function () { myFunction() };

  var navbar = document.getElementById("navbar");
  var logobar = document.getElementById("logo-bar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (!isElementInViewport(logobar)) {
      navbar.classList.add("sticky");
      navbar.classList.remove("absolute");
    } else {
      navbar.classList.remove("sticky");
      navbar.classList.add("absolute");
    }
  }





  const elements = document.querySelectorAll('.slide-in');
  const elements2 = document.querySelectorAll('.line-anim');

  function isElementInViewport(el, offset = 0) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
      rect.left >= 0 &&
      rect.bottom >= 0 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    elements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('slide-in-visible');
      }
    });
    elements2.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('line-anim-visible');
      }
    });
  }

  // Listen for scroll and call the handleScroll function
  window.addEventListener('scroll', handleScroll);
  // Initial check in case elements are already in view
  handleScroll();
  
});

