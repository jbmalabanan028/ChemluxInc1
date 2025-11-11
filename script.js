document.addEventListener('DOMContentLoaded', function() {
    var backgroundPositionX = 0;

    function moveBackground() {
        backgroundPositionX -= 1;
        document.body.style.backgroundPositionX = backgroundPositionX + 'px';
    }

    setInterval(moveBackground, 50);

    // Scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const logo = document.querySelector('.logo');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            const dropdownHeight = navLinks.scrollHeight;
            document.body.style.paddingTop = (50 + dropdownHeight) + 'px';
            logo.style.display = 'none';
        } else {
            document.body.style.paddingTop = '100px';
            logo.style.display = 'block';
        }
    });

});

function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name == '' || email == '' || message == '') {
      alert('Please fill in all fields');
      return false;
  }

  var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return false;
  }

  return true;
}

function initMap() {
    var address = { lat: 14.431135, lng: 120.999867 }; // Coordinates for Las Piñas, Philippines

    // The map, centered at the address
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: address,
    });

    var markerIcon = {
      url: "marker-icon.png",
      scaledSize: new google.maps.Size(50, 50),
    };

    var marker = new google.maps.Marker({
      position: address,
      map: map,
      icon: markerIcon,
      title: "2F, Earn Building, Alabang-Zapote Rd., Pamplona Uno, Las Piñas, Philippines",
    });
  }
