window.addEventListener('scroll', function() {
    var videoContainer = document.getElementById('header-video');
    if (window.scrollY > 250) {
        videoContainer.classList.add('shrink');
    } else {
        videoContainer.classList.remove('shrink');
    }
  });