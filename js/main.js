/**
 * LIFA GROUP — CORE CORPORATE SCRIPT
 * "Ensuring Life. Building Lifestyle."
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileDrawer();
  initInquiryModal();
  initFormSubmissions();
  initScrollAnimations();
  initSmoothScrollLinks();
});

/**
 * Navbar background elevation on scroll
 */
function initNavbarScroll() {
  const nav = document.getElementById('siteNav');
  if (!nav) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Navigation Drawer Controls
 */
function initMobileDrawer() {
  const burgerBtn = document.getElementById('burgerBtn');
  const drawerOverlay = document.getElementById('mobileMenuOverlay');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (!drawerOverlay) return;

  const openDrawer = () => {
    drawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (burgerBtn) burgerBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);

  drawerOverlay.addEventListener('click', (e) => {
    if (e.target === drawerOverlay) closeDrawer();
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawerOverlay.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/**
 * Corporate Inquiries Modal Dialog
 */
function initInquiryModal() {
  const modalOverlay = document.getElementById('inquiryModalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const openButtons = document.querySelectorAll('[data-open-modal="inquiry"]');

  if (!modalOverlay) return;

  const openModal = (e) => {
    if (e) e.preventDefault();
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    const firstInput = modalOverlay.querySelector('input, select');
    if (firstInput) setTimeout(() => firstInput.focus(), 150);
  };

  const closeModal = () => {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  openButtons.forEach(btn => btn.addEventListener('click', openModal));
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });
}

/**
 * Corporate Form Handling (Main Contact Form & Modal Form & Horizon Interest)
 */
function initFormSubmissions() {
  // Main Page Contact Form
  const contactForm = document.getElementById('corporateContactForm');
  const contactSuccessMsg = document.getElementById('contactFormSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Transmitting Inquiry...</span>';

      // Simulate clean corporate dispatch
      setTimeout(() => {
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (contactSuccessMsg) {
          contactSuccessMsg.style.display = 'flex';
          setTimeout(() => {
            contactSuccessMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 100);
        }
      }, 900);
    });
  }

  // Modal Inquiry Form
  const modalForm = document.getElementById('modalInquiryForm');
  const modalSuccessMsg = document.getElementById('modalFormSuccess');

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = modalForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Processing Request...</span>';

      setTimeout(() => {
        modalForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (modalSuccessMsg) {
          modalSuccessMsg.style.display = 'flex';
        }
      }, 800);
    });
  }

  // Coming Soon Horizon Newsletter Form
  const horizonForm = document.getElementById('horizonInterestForm');
  const horizonSuccess = document.getElementById('horizonSuccessMsg');

  if (horizonForm) {
    horizonForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = horizonForm.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Enrolling...';

      setTimeout(() => {
        horizonForm.reset();
        btn.disabled = false;
        btn.textContent = 'Access Requested';
        if (horizonSuccess) {
          horizonSuccess.style.display = 'block';
        }
      }, 700);
    });
  }
}

/**
 * Scroll triggered subtle reveal animation
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-up-element');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/**
 * Smooth Anchor Navigation with offset
 */
function initSmoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
