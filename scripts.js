function scrollToTop() {
  var top = document.body;
  top.scrollIntoView({ behavior: "smooth" });
}

function scrollToGallery() {
  var gallery = document.getElementById("gallery");
  gallery.scrollIntoView({ behavior: "smooth", block: "start" });
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
            } else {
                navbar.classList.remove("sticky");
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


    });
