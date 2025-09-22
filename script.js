// Home
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = 1;
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, {
      threshold: 0.1
  });

  cards.forEach(card => {
      observer.observe(card);
  });
});

//Scroll Down
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the scroll-to-top button 
window.onscroll = function() {
    var scrollTopButton = document.getElementById('scrollTop');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
};

//Contact
function validateForm(event) {
  event.preventDefault(); 
  let form = document.getElementById('contactForm');
  let inputs = form.querySelectorAll('input[required], textarea[required]');
  for (let input of inputs) {
      if (input.value.trim() === '') {
          alert('Please fill in the ' + input.placeholder);
          input.focus();
          return false;
      }
  }

  // Validasi tambahan untuk email
  let email = document.getElementById('email').value;
  if (!email.endsWith('@gmail.com')) {
      alert('Please enter a valid Gmail address.');
      document.getElementById('email').focus();
      return false;
  }

  showPopup();
  return false; 
}

function showPopup() {
  let popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup() {
  let popup = document.getElementById('popup');
  popup.style.display = 'none';
}


//About
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.profile, .subscribe, .recipes');
  elements.forEach(el => {
      el.classList.add('fade-in');
  });
});

// Recipe
function showCategory(category) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      card.style.display = card.getAttribute('data-category') === category || category === 'all' ? 'block' : 'none';
  });
}

// Show default category
showCategory('breakfast');

// Product
function switchContent(selected) {
  
  var adultsButton = document.getElementById('adultsButton');
  var kidsButton = document.getElementById('kidsButton');
  var adultsContent = document.getElementById('adultsContent');
  var kidsContent = document.getElementById('kidsContent');

  if (selected === 'adults') {
      adultsButton.classList.add('active');
      kidsButton.classList.remove('active');
      adultsContent.classList.add('active');
      kidsContent.classList.remove('active');
  } else {
      adultsButton.classList.remove('active');
      kidsButton.classList.add('active');
      adultsContent.classList.remove('active');
      kidsContent.classList.add('active');
  }
}