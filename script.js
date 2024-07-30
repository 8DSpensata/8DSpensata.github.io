// Toggle menu on mobile with animation
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active');
});
// Smooth scroll animation
document.querySelectorAll('a[data-scroll]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const headerOffset = 50; // Offset for fixed header
      const elementPosition = targetElement.getBoundingClientRect().top - headerOffset;
      const startPosition = window.pageYOffset;
      const duration = 800; // Duration in ms
  
      let startTime = null;
  
      function scrollAnimation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, elementPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
      }
  
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(scrollAnimation);
    });
  });
  
// Smooth scroll animation for modern button
document.querySelectorAll('.modern-button[href^="#"]').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerOffset = 50; // Offset for fixed header
        const elementPosition = targetElement.getBoundingClientRect().top - headerOffset;
        const startPosition = window.pageYOffset;
        const duration = 800; // Duration in ms

        let startTime = null;

        function scrollAnimation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, elementPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(scrollAnimation);
    });
});
