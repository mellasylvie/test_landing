(function () {
  'use strict';

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  };
  window.addEventListener('load', navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header');
    let offset = header.offsetHeight;

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth',
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header');
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled');
      } else {
        selectHeader.classList.remove('header-scrolled');
      }
    };
    window.addEventListener('load', headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    };
    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    'click',
    '.navbar .dropdown > a',
    function (e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle('dropdown-active');
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    'click',
    '.scrollto',
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select('#navbar');
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile');
          let navbarToggle = select('.mobile-nav-toggle');
          navbarToggle.classList.toggle('bi-list');
          navbarToggle.classList.toggle('bi-x');
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Initiate gallery lightbox
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox',
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  });
})();

var slider1 = document.getElementById('cv');
var output1 = document.getElementById('value1');
output1.innerHTML = slider1.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function () {
  output1.innerHTML = this.value;
};

var slider2 = document.getElementById('regresi');
var output2 = document.getElementById('value2');
output2.innerHTML = slider2.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider2.oninput = function () {
  output2.innerHTML = this.value;
};

var slider3 = document.getElementById('timeseries');
var output3 = document.getElementById('value3');
output3.innerHTML = slider3.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider3.oninput = function () {
  output3.innerHTML = this.value;
};

var slider4 = document.getElementById('eda');
var output4 = document.getElementById('value4');
output4.innerHTML = slider4.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider4.oninput = function () {
  output4.innerHTML = this.value;
};

var slider5 = document.getElementById('nlp');
var output5 = document.getElementById('value5');
output5.innerHTML = slider5.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider5.oninput = function () {
  output5.innerHTML = this.value;
};

var slider6 = document.getElementById('speech');
var output6 = document.getElementById('value6');
output6.innerHTML = slider6.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider6.oninput = function () {
  output6.innerHTML = this.value;
};

var slider7 = document.getElementById('data');
var output7 = document.getElementById('value7');
output7.innerHTML = slider7.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider7.oninput = function () {
  output7.innerHTML = this.value;
};

var slider8 = document.getElementById('deploy');
var output8 = document.getElementById('value8');
output8.innerHTML = slider8.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider8.oninput = function () {
  output8.innerHTML = this.value;
};

var slider9 = document.getElementById('fe');
var output9 = document.getElementById('value9');
output9.innerHTML = slider9.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider9.oninput = function () {
  output9.innerHTML = this.value;
};

var slider10 = document.getElementById('be');
var output10 = document.getElementById('value10');
output10.innerHTML = slider10.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider10.oninput = function () {
  output10.innerHTML = this.value;
};

var slider11 = document.getElementById('mlops');
var output11 = document.getElementById('value11');
output11.innerHTML = slider11.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider11.oninput = function () {
  output11.innerHTML = this.value;
};

var slider12 = document.getElementById('writer');
var output12 = document.getElementById('value12');
output12.innerHTML = slider12.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider12.oninput = function () {
  output12.innerHTML = this.value;
};

// Form Script
const name = document.getElementById('name');
const email = document.getElementById('email');
const deskripsi = document.getElementById('deskripsi');
const button = document.getElementById('button');

button.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Submit');

  if (!name.value || !email.value || !deskripsi.value) {
    Swal.fire({
      icon: 'warning',
      title: 'Peringatan',
      text: 'Mohon Isi Form Dengan Benar',
    });
    return;
  }

  let ebody = `
    <b>Name: </b>${name.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>Deskripsi: </b>${deskripsi.value}
    `;

  Email.send({
    SecureToken: '',
    To: '',
    From: '',
    Subject: 'Potential Client: ' + name.value,
    Body: ebody,
  })
    .then((message) => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Ide Berhasil Terkirim!',
      });
      name.value = '';
      email.value = '';
      deskripsi.value = '';
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Maaf Ide Anda Gagal Terkirim :(',
      });
    });
});

// Slide Partner
var copy = document.querySelector('.logos-slide').cloneNode(true);
document.querySelector('.logos').appendChild(copy);
