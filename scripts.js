function scrollToTop() {
  var top = document.body;
  top.scrollIntoView({ behavior: "smooth" });
}

function scrollToGallery() {
  var gallery = document.getElementById("gallery");
  gallery.scrollIntoView({ behavior: "smooth"});
}

function scrollToFooter() {
  var footer = document.getElementById("footer");
  footer.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function() {
        // Tutaj umieść swój skrypt
        window.onscroll = function() { myFunction() };

        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;

        function myFunction() {
            if (window.scrollY >= sticky) {
                navbar.classList.add("sticky");
                navbar.classList.remove("absolute");
            } else {
                navbar.classList.remove("sticky");
                navbar.classList.add("absolute");
            }
        }

        document.getElementById("navbar-contact").addEventListener('click', function(event) {
            event.preventDefault(); // Zapobiega domyślnej akcji przeglądarki
            scrollToFooter();
        });

        document.getElementById("navbar-home").addEventListener('click', function(event) {
            event.preventDefault(); // Zapobiega domyślnej akcji przeglądarki
            scrollToTop();
        });

        document.getElementById("navbar-gallery").addEventListener('click', function(event) {
            event.preventDefault(); // Zapobiega domyślnej akcji przeglądarki
            scrollToGallery();
        });



        const elements = document.querySelectorAll('.slide-in');

  function isElementInViewport(el, offset = 100) {
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
  }

  // Listen for scroll and call the handleScroll function
  window.addEventListener('scroll', handleScroll);
  // Initial check in case elements are already in view
  handleScroll();

    });
