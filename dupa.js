document.getElementById("navbar-home").addEventListener('click', function (event) {
    event.preventDefault(); // Zapobiega domyślnej akcji przeglądarki
    scrollToTop();
  });

  try {
    document.getElementById("navbar-offer").addEventListener('click', function (event) {
      event.preventDefault(); // Zapobiega domyślnej akcji przeglądarki
      scrollToOffer();
    });
  } catch (error) {

  }

  document.getElementById("navbar-gallery").addEventListener('click', function (event) {
    event.preventDefault(); // Zapobiega domyślnej akcji przeglądarki
    scrollToGallery();
  });

  try {
    document.getElementById("navbar-about").addEventListener('click', function (event) {
      event.preventDefault(); // Zapobiega domyślnej akcji przeglądarki
      scrollToAbout();
    });
  } catch (error) {

  }

  document.getElementById("navbar-contact").addEventListener('click', function (event) {
    event.preventDefault(); // Zapobiega domyślnej akcji przeglądarki
    scrollToFooter();
  });