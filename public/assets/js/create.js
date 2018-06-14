$("#formsubmit").on("click", function () {

  var name = $("#name").val().trim();
  var title = $("#title").val().trim();
  var body = $("#body").val().trim();

  var newPost = {
    username: name,
    title: title,
    body: body
  };

  console.log(newPost);


  if (!name || !title || !body || name === " " || title === " " || body === " ") {
    alert('Please complete all fields.');
  } else {
    $.post("/api/posts/", newPost, function () {
      window.location.href = "/support";
    });
  }

})

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


