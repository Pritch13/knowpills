function getAlts(category) {
  $.get("/api/alt", function (data) {

    console.log(data);

    for (let i = 0; i < 16; i++) {
      var name = data[i].name;
      var details = data[i].details;
      var entry = "<div class='col l3'><div class='card medium'><div class='card-content'><span class='card-title'>" + name + "<hr></span><p id='det'>" + details + "</br></p></div></div></div>";
      $(".alt-container").append(entry);
    }

    for (let i = 16; i < 26; i++) {
      var name = data[i].name;
      var details = data[i].details;
      var entry = "<div class='col l3'><div class='card medium'><div class='card-content'><span class='card-title'>" + name + "<hr></span><p id='det'>" + details + "</br></p></div></div></div>";
      $(".wellalt-container").append(entry);
    }

  });
}

getAlts();





$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(document).ready(function () {

  window.sr = ScrollReveal();

  sr.reveal('.alt-container', {
    origin: 'bottom',
    distance: '500px',
    duration: 1000
  });

  sr.reveal('.wellalt-container', {
    origin: 'bottom',
    distance: '500px',
    duration: 1000
  });

  sr.reveal('.nextbutton', {
    origin: 'bottom',
    distance: '500px',
    duration: 1000
  });

  sr.reveal('.topin', {
    origin: 'top',
    distance: '200px',
  });

});

