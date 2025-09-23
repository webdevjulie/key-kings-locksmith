const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      
      // Add smooth slide animation
      if (!menu.classList.contains('hidden')) {
        menu.style.maxHeight = '0px';
        menu.style.overflow = 'hidden';
        menu.style.transition = 'max-height 0.3s ease-out';
        setTimeout(() => {
          menu.style.maxHeight = menu.scrollHeight + 'px';
        }, 10);
      }
    });

    // Enhanced Form Submission with Validation
    document.getElementById('booking-form').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form elements
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const address = document.getElementById('address').value.trim();
      const serviceType = document.getElementById('service_type').value;
      const needed = document.getElementById('needed').value;
      
      // Basic validation
      if (!name || !phone || !address || !serviceType || !needed) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Phone validation (basic)
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
        alert('Please enter a valid phone number.');
        return;
      }
      
      // Success feedback
      const submitBtn = e.target.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = `
        <span class="material-icons animate-spin">sync</span>
        <span>Sending Request...</span>
      `;
      submitBtn.disabled = true;
      
      // Simulate form submission (replace with actual form handler)
      setTimeout(() => {
        submitBtn.innerHTML = `
          <span class="material-icons">check_circle</span>
          <span>Request Sent!</span>
        `;
        submitBtn.classList.add('from-green-500', 'to-green-600');
        submitBtn.classList.remove('from-brand-orange', 'to-brand-orange-hover');
        
        // Reset form
        setTimeout(() => {
          this.reset();
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.classList.remove('from-green-500', 'to-green-600');
          submitBtn.classList.add('from-brand-orange', 'to-brand-orange-hover');
        }, 3000);
      }, 2000);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('nav');
      if (window.scrollY > 50) {
        navbar.classList.add('shadow-2xl');
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      } else {
        navbar.classList.remove('shadow-2xl');
        navbar.style.backdropFilter = 'none';
        navbar.style.backgroundColor = 'white';
      }
    });

    // Add loading animation to page
    window.addEventListener('load', function() {
      document.body.classList.add('animate-fade-in');
    });