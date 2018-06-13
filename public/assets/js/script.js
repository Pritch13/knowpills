$(document).ready(function(){
    $('.tap-target').tapTarget();
  });

var typed = new Typed('#intro', {
    strings: ["KNOW PILLS.", "KNOW OPIATES.", "KNOW MEDICINE.", "KNOW YOU.", "KNOW FAMILY.",
     "KNOW FRIENDS.", "KNOW PHARMACIES.", "KNOW DOCTORS.", "KNOW PILLS."],
    typeSpeed: 50,
    backSpeed: 50,
    smartBackspace: true
});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  for (let i = 0; i < 116; i++) {
    $('.personloop').append('<img class="person" src="https://gardenacu.com/wp-content/uploads/2015/06/aiga-toilet-men.png"/>')
    console.log(i);
    
  }


  window.sr = ScrollReveal();

  sr.reveal('#intro', {
      origin: 'left'
  });

  sr.reveal('.introBtn', {
    duration: 1000,
    origin: 'right',
    distance: '200px',
    delay: 200
});

sr.reveal('#infotitle', {
    origin: 'left',
    distance: '400px',
    duration: 1000
});

sr.reveal('.person', {
    origin: 'left',
    distance: '400px',
    duration: 2000
});

sr.reveal('#factfirst', {
    origin: 'bottom',
    distance: '500px',
    duration: 1000
});

sr.reveal('.nextbutton', {
    origin: 'bottom',
    distance: '500px',
    duration: 1000
});

sr.reveal('.leftslide', {
    origin: 'left',
    distance: '500px',
    duration: 1000
});

sr.reveal('#brainrisks', {
    origin: 'bottom',
    distance: '500px',
    duration: 1000
});

sr.reveal('#altLink', {
    origin: 'left',
    distance: '300px',
    duration: 1000
});

sr.reveal('#supportLink', {
    origin: 'right',
    distance: '100px',
    duration: 1000
});


