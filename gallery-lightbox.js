document.addEventListener("DOMContentLoaded", function () {

    let slideIndex = 1;
    showSlides(slideIndex);
    
    function showSlides(n) {
      let i;
      let slides = Array.from(document.getElementsByClassName("lightbox-slide"));
      let captionText = document.getElementById("caption");
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
      captionText.innerHTML = slideIndex + " / " + slides.length;
    }
    
    
    
    
    function openLightbox() {
      document.getElementById("lightbox").style.display = "block";
    }
    
    function closeLightbox() {
      document.getElementById("lightbox").style.display = "none";
    }
    
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    document.addEventListener('keydown', function(event) {
      if (document.getElementById('lightbox').style.display === 'block') {
          if (event.key === 'ArrowLeft') {
              plusSlides(-1);
          } else if (event.key === 'ArrowRight') {
              plusSlides(1);
          } else if (event.key === 'Escape') {
              closeLightbox();
          }
      }
  });
  
  
  
    window.openLightbox = openLightbox;
    window.closeLightbox = closeLightbox;
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide;
});
