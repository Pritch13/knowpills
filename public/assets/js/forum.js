function displayEmpty() {
  var messageH3 = $("<h3>");
  messageH3.css({ "text-align": "center", "margin-top": "50px" });
  messageH3.html("No posts yet!");
  $(".forum-container").append(messageH3);
}

function initializeRows() {
  for (let i = 0; i < posts.length; i++) {
    var username = posts[i].username;
    var title = posts[i].title;
    var body = posts[i].body;
    var id = posts[i].id;
    var entry = "<div class='row'><div class='col l12'><div class='card'><div class='card-content'><span class='card-title'>" + title + "</span><p>" + body + "</br><a class='waves-effect waves-light btn learnmore forumMore' data-id='" + id + "'>See more</a></p><p class='right-align'>Created by " + username + "</p></div></div></div></div>";
    $(".forum-container").append(entry);
  }
}


// This function grabs posts from the database and updates the view
function getPosts(category) {
  $.get("/api/posts", function (data) {
    console.log("Posts", data);
    posts = data;
    if (!posts || !posts.length) {
      displayEmpty();
    }
    else {
      initializeRows();
    }
  });
}

getPosts();

$(document).on("click", ".forumMore", function () {
  var idClicked = $(this).attr("data-id");
  localStorage.setItem('id', idClicked);

  window.location.href = "/comment";
});

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

  sr.reveal('.topin', {
    origin: 'top',
    distance: '200px',
  });

});
