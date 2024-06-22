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
  
  
  
    window.openLightbox = openLightbox;
    window.closeLightbox = closeLightbox;
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide;
});
