/* ============================================================
   CLÍNICA ODONTOLÓGICA — JAVASCRIPT
   Scroll Reveal · Navbar · Mobile Menu · Lightbox · Back to Top
   ============================================================ */

'use strict';

/* ---------- DOM REFERENCES ---------- */
const navbar     = document.getElementById('navbar');
const hamburger  = document.getElementById('hamburger');
const navMenu    = document.getElementById('nav-menu');
const backTop    = document.getElementById('back-top');
const lightbox   = document.getElementById('lightbox');
const lbClose    = document.getElementById('lightbox-close');
const lbLabel    = document.getElementById('lightbox-label');

/* ---------- SCROLL REVEAL ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
  revealObserver.observe(el);
});

/* ---------- NAVBAR SCROLL ---------- */
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  /* Add shadow when scrolled */
  navbar.classList.toggle('scrolled', scrollY > 40);

  /* Show / hide back-to-top button */
  backTop.classList.toggle('visible', scrollY > 400);

  lastScrollY = scrollY;
}, { passive: true });

/* ---------- MOBILE MENU ---------- */
hamburger.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  hamburger.classList.toggle('active', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

/* Close menu when a nav link is clicked */
navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* Close menu on outside click */
document.addEventListener('click', (e) => {
  if (navMenu.classList.contains('open') &&
      !navMenu.contains(e.target) &&
      !hamburger.contains(e.target)) {
    navMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

/* ---------- SMOOTH SCROLL FOR ANCHOR LINKS ---------- */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    const offset = navbar.offsetHeight + 8;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ---------- BACK TO TOP ---------- */
backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ---------- GALERIA LIGHTBOX ---------- */
const galeriaItems = document.querySelectorAll('.galeria-item');

function openLightbox(label) {
  lbLabel.textContent = label || 'Foto da clínica';
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  lbClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

galeriaItems.forEach((item) => {
  item.addEventListener('click', () => {
    openLightbox(item.dataset.label);
  });

  /* Keyboard accessibility */
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(item.dataset.label);
    }
  });
});

lbClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    closeLightbox();
  }
});

/* ---------- ACTIVE NAV LINK ON SCROLL ---------- */
const sections = document.querySelectorAll('section[id]');

const activeLinkObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navMenu.querySelectorAll('a').forEach((link) => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${id}`) {
            link.style.color = 'var(--blue)';
          }
        });
      }
    });
  },
  {
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0,
  }
);

sections.forEach((section) => activeLinkObserver.observe(section));

/* ---------- COUNTER ANIMATION ---------- */
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const duration = 1800;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  };
  requestAnimationFrame(step);
}

/* Trigger counter when hero stats enter viewport */
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll('.stat-number');
        const values = [10, 2000, 5];
        const suffixes = ['+', '+', '★'];
        statNumbers.forEach((el, i) => {
          animateCounter(el, values[i], suffixes[i]);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

const heroCard = document.querySelector('.hero-card-stats');
if (heroCard) statsObserver.observe(heroCard);

/* ---------- LAZY LOADING IMAGES ---------- */
if ('loading' in HTMLImageElement.prototype) {
  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    img.src = img.dataset.src || img.src;
  });
} else {
  const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        lazyObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach((img) => {
    lazyObserver.observe(img);
  });
}

/* ---------- WHATSAPP FLOAT — HIDE ON FOOTER ---------- */
const whatsFloat = document.querySelector('.whatsapp-float');
const footer = document.querySelector('footer');

if (whatsFloat && footer) {
  const footerObserver = new IntersectionObserver(
    ([entry]) => {
      whatsFloat.style.opacity = entry.isIntersecting ? '0' : '1';
      whatsFloat.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto';
    },
    { threshold: 0.1 }
  );
  footerObserver.observe(footer);
}
