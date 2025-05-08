// Additional JavaScript to improve responsive behavior

document.addEventListener('DOMContentLoaded', function() {
    // Navbar background change on scroll - especially for mobile
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(5, 39, 51, 0.95)';
      } else {
        if (window.innerWidth > 992) {
          navbar.style.backgroundColor = 'rgba(5, 39, 51, 0)';
        }
      }
    });
    
    // Check on page load
    if (window.innerWidth <= 992) {
      navbar.style.backgroundColor = 'rgba(5, 39, 51, 0.95)';
    }
    
    // Close navbar collapse on link click on mobile
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth < 992) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      });
    });
    
    // Handle video overlay click for better mobile experience
    const videoOverlay = document.getElementById('video-overlay');
    const videoFrame = document.getElementById('video-frame');
    
    if (videoOverlay && videoFrame) {
      videoOverlay.addEventListener('click', function() {
        videoOverlay.style.display = 'none';
        
        // Getting the YouTube video URL and adding autoplay parameter
        let videoSrc = videoFrame.src;
        if (videoSrc.indexOf('autoplay') === -1) {
          videoFrame.src = videoSrc + (videoSrc.includes('?') ? '&' : '?') + 'autoplay=1';
        }
        
        // Show controls
        if (videoSrc.indexOf('controls=0') !== -1) {
          videoFrame.src = videoSrc.replace('controls=0', 'controls=1');
        } else {
          videoFrame.src = videoSrc + '&controls=1';
        }
      });
    }
    
    // Adjust carousel height on mobile
    function adjustCarouselHeight() {
      const carouselItems = document.querySelectorAll('.carousel-item');
      
      if (window.innerWidth <= 576) {
        carouselItems.forEach(item => {
          item.style.height = '60vh';
        });
      } else if (window.innerWidth <= 768) {
        carouselItems.forEach(item => {
          item.style.height = '70vh';
        });
      } else if (window.innerWidth <= 992) {
        carouselItems.forEach(item => {
          item.style.height = '90vh';
        });
      } else {
        carouselItems.forEach(item => {
          item.style.height = '100vh';
        });
      }
    }
    
    // Run on load and resize
    adjustCarouselHeight();
    window.addEventListener('resize', adjustCarouselHeight);
    
    // Better handling of menu modal on mobile
    const menuModal = document.getElementById('menuModal');
    if (menuModal) {
      menuModal.addEventListener('shown.bs.modal', function() {
        // Adjust max height of modal body based on screen height
        const modalBody = menuModal.querySelector('.modal-body');
        if (modalBody) {
          const viewportHeight = window.innerHeight;
          const modalHeader = menuModal.querySelector('.modal-header');
          const headerHeight = modalHeader ? modalHeader.offsetHeight : 0;
          
          // Set max height with some padding
          modalBody.style.maxHeight = (viewportHeight - headerHeight - 40) + 'px';
        }
      });
    }
  });