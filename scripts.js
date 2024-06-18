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
  gallery.scrollIntoView({ behavior: "smooth"});
}

function scrollToAbout() {
  var footer = document.getElementById("about");
  footer.scrollIntoView({ behavior: "smooth" });
}

function scrollToFooter() {
  var footer = document.getElementById("footer");
  footer.scrollIntoView({ behavior: "smooth" });
}

function onlyfura() {
  var wszystko = Array.from(document.getElementsByClassName("gallery-item"));
  var more = Array.from(document.getElementsByClassName("more"));
  wszystko.splice(wszystko.indexOf(more), 1);
  var fury = Array.from(document.getElementsByClassName("fura"));
  wszystko.forEach(element => {
    element.classList.add("non-display");
  });
  fury.forEach(element => {
    element.classList.remove("non-display");
  });
}

function wszystko() {
  var wszystko = Array.from(document.getElementsByClassName("gallery-item"));
  var more = Array.from(document.getElementsByClassName("more"));
  wszystko.splice(wszystko.indexOf(more), 1);
  wszystko.forEach(element => {
    element.classList.remove("non-display");
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.gallery-category-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Usuwamy klasę 'active' z wszystkich przycisków
      buttons.forEach(btn => btn.classList.remove('active'));
      // Dodajemy klasę 'active' do klikniętego przycisku
      button.classList.add('active');

      if (button.id === 'gallery-category-all') {
        wszystko(); // Wywołujemy funkcję wszystko()
      } else if (button.id === 'gallery-category-onlyfury') {
        onlyfura(); // Wywołujemy funkcję onlyfura()
      }

    });
  });



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


        document.getElementById("navbar-home").addEventListener('click', function(event) {
            event.preventDefault(); // Zapobiega domyślnej akcji przeglądarki
            scrollToTop();
        });

        document.getElementById("navbar-offer").addEventListener('click', function(event) {
          event.preventDefault(); // Zapobiega domyślnej akcji przeglądarki
          scrollToOffer();
      });

        document.getElementById("navbar-gallery").addEventListener('click', function(event) {
            event.preventDefault(); // Zapobiega domyślnej akcji przeglądarki
            scrollToGallery();
        });

        document.getElementById("navbar-about").addEventListener('click', function(event) {
          event.preventDefault(); // Zapobiega domyślnej akcji przeglądarki
          scrollToAbout();
      });

        document.getElementById("navbar-contact").addEventListener('click', function(event) {
          event.preventDefault(); // Zapobiega domyślnej akcji przeglądarki
          scrollToFooter();
      });


        const elements = document.querySelectorAll('.slide-in');
        const elements2 = document.querySelectorAll('.line-anim');

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
