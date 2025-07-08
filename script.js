document.addEventListener('DOMContentLoaded', () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Animate the section
  gsap.from('#about', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 50%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
  });

  // Animate decorative elements
  gsap.from('#about .absolute.left-0', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 70%',
    },
    opacity: 0,
    duration: 1.5,
    delay: 0.3,
  });

  // Animate header
  gsap.from('#about h2', {
    scrollTrigger: {
      trigger: '#about h2',
      start: 'top 80%',
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.2,
  });

  // Animate image
  gsap.from('#about .lg\\:w-1\\/2.relative', {
    scrollTrigger: {
      trigger: '#about .lg\\:flex-row',
      start: 'top 70%',
    },
    opacity: 0,
    x: -50,
    duration: 0.8,
    delay: 0.4,
  });

  // Animate text content
  gsap.from('#about .lg\\:w-1\\/2:last-child', {
    scrollTrigger: {
      trigger: '#about .lg\\:flex-row',
      start: 'top 70%',
    },
    opacity: 0,
    x: 50,
    duration: 0.8,
    delay: 0.4,
  });

  // Animate floating badge
  gsap.from('#about .absolute.-bottom-6', {
    scrollTrigger: {
      trigger: '#about .lg\\:flex-row',
      start: 'top 60%',
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.8,
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Initialize GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // 1. Animate decorative background blobs
  gsap.to('#services .absolute.inset-0 div', {
    opacity: 1,
    scale: 1,
    duration: 1.5,
    stagger: 0.3,
    ease: 'elastic.out(1, 0.5)',
    scrollTrigger: {
      trigger: '#services',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });

  // 2. Animate section header
  gsap.to('#services .text-center h2', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'back.out(1.2)',
    scrollTrigger: {
      trigger: '#services .text-center',
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
  });

  gsap.to('#services .text-center p', {
    opacity: 1,
    y: 0,
    duration: 0.6,
    delay: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#services .text-center',
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
  });

  // 3. Animate service cards with staggered effect
  gsap.to('#services .service-card', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'back.out(1.2)',
    scrollTrigger: {
      trigger: '#services .grid',
      start: 'top 70%',
      toggleActions: 'play none none none',
    },
  });

  // 4. Add smooth hover effects
  document.querySelectorAll('.service-card').forEach((card) => {
    const img = card.querySelector('img');
    const content = card.querySelector('.p-6');

    // Store original styles
    const originalBoxShadow = window.getComputedStyle(card).boxShadow;
    const originalBorderColor = window.getComputedStyle(card).borderColor;

    card.addEventListener('mouseenter', () => {
      gsap.to(img, {
        scale: 1.05,
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(card, {
        boxShadow: '0 20px 25px -5px rgba(236, 72, 153, 0.2)',
        borderColor: '#f9a8d4',
        duration: 0.3,
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(img, {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(card, {
        boxShadow: originalBoxShadow,
        borderColor: originalBorderColor,
        duration: 0.3,
      });
    });

    // 5. Smooth dropdown animation
    const readMoreBtn = card.querySelector('.read-more-btn');
    const dropdownContent = card.querySelector('.dropdown-content');
    const arrow = readMoreBtn.querySelector('svg');

    // Set initial state
    gsap.set(dropdownContent, {
      height: 0,
      opacity: 0,
      marginTop: 0,
      paddingTop: 0,
      paddingBottom: 0,
    });

    readMoreBtn.addEventListener('click', (e) => {
      e.preventDefault();

      if (dropdownContent.classList.contains('hidden')) {
        dropdownContent.classList.remove('hidden');
        gsap.to(dropdownContent, {
          height: 'auto',
          opacity: 1,
          marginTop: '1rem',
          paddingTop: '1rem',
          paddingBottom: '0.5rem',
          duration: 0.4,
          ease: 'power2.out',
        });
        gsap.to(arrow, {
          rotate: 180,
          duration: 0.3,
        });
      } else {
        gsap.to(dropdownContent, {
          height: 0,
          opacity: 0,
          marginTop: 0,
          paddingTop: 0,
          paddingBottom: 0,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            dropdownContent.classList.add('hidden');
          },
        });
        gsap.to(arrow, {
          rotate: 0,
          duration: 0.3,
        });
      }
    });
  });
});

// Navbar scroll functionality
const navbar = document.getElementById('navbar');
const navContainer = navbar.querySelector('div:first-child');
const navBlur = navbar.querySelector('div > div'); // Elemen backdrop blur

// Pastikan tidak ada border default
navBlur.classList.add('border-transparent');

function handleScroll() {
  if (window.scrollY > 50) {
    // Saat scroll down
    if (window.innerWidth >= 768) {
      // Hanya untuk desktop (≥768px)
      navContainer.style.maxWidth = '67%';
    }
    navBlur.classList.remove('border-transparent');
    navBlur.classList.add('border', 'border-pink-200');
  } else {
    // Saat di atas
    if (window.innerWidth >= 768) {
      // Hanya untuk desktop (≥768px)
      navContainer.style.maxWidth = '82%';
    }
    navBlur.classList.remove('border', 'border-pink-200');
    navBlur.classList.add('border-transparent');
  }
}

// Inisialisasi event
window.addEventListener('load', function () {
  // Set initial max-width untuk mobile
  if (window.innerWidth < 768) {
    navContainer.style.maxWidth = '100%';
  }
  handleScroll();
});

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', function () {
  // Handle perubahan ukuran layar
  if (window.innerWidth < 768) {
    navContainer.style.maxWidth = '100%'; // Full width di mobile
  } else {
    handleScroll(); // Jalankan normal di desktop
  }
});

// Mobile menu toggle (tetap sama)
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('block');

  const icon = mobileMenuButton.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// Lihat Selengkapnya
document.addEventListener('DOMContentLoaded', function () {
  const readMoreBtns = document.querySelectorAll('.read-more-btn');

  readMoreBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      // Dapatkan ID dropdown yang sesuai dari atribut data-service
      const dropdownId = this.getAttribute('data-service');
      const dropdown = document.getElementById(dropdownId);

      // Tutup semua dropdown terlebih dahulu
      document.querySelectorAll('.dropdown-content').forEach((content) => {
        if (content.id !== dropdownId) {
          content.classList.add('hidden');
          // Reset icon panah
          const correspondingBtn = document.querySelector(
            `[data-service="${content.id}"] svg`
          );
          if (correspondingBtn) {
            correspondingBtn.classList.remove('rotate-180');
          }
        }
      });

      // Toggle dropdown yang diklik
      dropdown.classList.toggle('hidden');

      // Toggle rotasi panah
      const arrow = this.querySelector('svg');
      arrow.classList.toggle('rotate-180');
    });
  });
});

// Why Choose Me
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.animate-count');
  const speed = 200;

  counters.forEach((counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }

    function updateCount() {
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    }
  });
});

// Count-up animation for statistics
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.animate-count');
  const speed = 200;

  counters.forEach((counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }

    function updateCount() {
      const count = +counter.innerText.replace('+', '');
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText =
          target + (counter.textContent.includes('+') ? '+' : '');
      }
    }
  });
});

// Clientts
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.testimonial-slides');
  const slides = document.querySelectorAll('.testimonial-slide');
  const container = slider.parentElement;

  // 1. Clone slides for infinite loop
  const clones = Array.from(slides).map((slide) => {
    const clone = slide.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    slider.appendChild(clone);
    return clone;
  });

  // 2. Animation settings
  const baseSpeed = 0.15; // Slower base speed (pixels/ms)
  let currentSpeed = baseSpeed;
  let targetSpeed = baseSpeed;
  const acceleration = 0.001; // How quickly it speeds up/slows down
  const slideWidth = slides[0].offsetWidth + 24;
  const totalWidth = slideWidth * slides.length;

  // 3. Animation state
  let requestId = null;
  let position = 0;
  let lastTimestamp = 0;
  let isPaused = false;

  // 4. Smooth animation loop
  function animate(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const delta = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    // Smooth speed adjustment
    if (Math.abs(currentSpeed - targetSpeed) > 0.001) {
      currentSpeed += (targetSpeed - currentSpeed) * acceleration * delta;
    } else {
      currentSpeed = targetSpeed;
    }

    position -= currentSpeed * delta;

    // Infinite loop logic
    if (position <= -totalWidth) {
      position += totalWidth;
    }

    slider.style.transform = `translateX(${position}px)`;
    requestId = requestAnimationFrame(animate);
  }

  // 5. Gentle pause with deceleration
  function handlePause() {
    if (isPaused) return;
    targetSpeed = 0;
    isPaused = true;
  }

  // 6. Smooth resume with acceleration
  function handleResume() {
    if (!isPaused) return;
    targetSpeed = baseSpeed;
    isPaused = false;
    lastTimestamp = 0; // Reset timestamp for smooth restart
  }

  // 7. Event listeners with debouncing
  let hoverTimeout;
  container.addEventListener('mouseenter', () => {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(handlePause, 100);
  });

  container.addEventListener('mouseleave', () => {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(handleResume, 50);
  });

  // 8. Handle visibility changes
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      handlePause();
    } else {
      handleResume();
    }
  });

  // Initialize animation
  requestId = requestAnimationFrame(animate);

  // Cleanup
  return () => {
    cancelAnimationFrame(requestId);
    clones.forEach((clone) => clone.remove());
    clearTimeout(hoverTimeout);
  };
});

// Booking Form
document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const message = document.getElementById('message').value;

  // Format WhatsApp message
  const whatsappMessage =
    `Halo Glow Aesthetic Clinic,\n\n` +
    `Saya ingin melakukan booking perawatan dengan detail berikut:\n\n` +
    `📌 *Nama*: ${name}\n` +
    `📞 *WhatsApp*: ${phone}\n` +
    `📧 *Email*: ${email || '-'}\n` +
    `💆 *Perawatan*: ${service}\n` +
    `📅 *Tanggal*: ${date}\n` +
    `✉️ *Pesan Tambahan*: ${message || '-'}\n\n` +
    `Mohon konfirmasi ketersediaan jadwalnya. Terima kasih.`;

  // Encode for WhatsApp URL
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // Open WhatsApp
  window.open(`https://wa.me/6281234567890?text=${encodedMessage}`, '_blank');
});

// FAQ
document.querySelectorAll('.group button').forEach((button) => {
  button.addEventListener('click', () => {
    const faqItem = button.closest('.group');
    const isActive = faqItem.classList.contains('active');

    // Close all items first
    document.querySelectorAll('.group').forEach((item) => {
      item.classList.remove('active');
    });

    // Toggle current item if not active
    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});
