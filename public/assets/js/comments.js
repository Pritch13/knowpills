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
  
  var id = localStorage.getItem('id');

  console.log(id);
  

  $.get("/api/posts/" + id, function(data) {

    console.log(data);

    var username = data[0].username;
    var title = data[0].title;
    var body = data[0].body;
    var entry = "<div class='fullpost'><div class='row'><div class='col l6'><h4>"+title+"</h4></div></div><div class='row'><div class='col m12'><p>"+body+"</p></div></div><div class='row'><div class='col m12'><p class='right-align'>Created by "+username+"</p></div></div></div>";
    $(".comment-container").append(entry);
    

  });


  $("#submitcomment").on("click", function(){
    var commentName = $("#name").val().trim();
    var commentBody = $("#message").val().trim();

    console.log(commentName);
    console.log(commentBody);

    var newComment = {
      username: commentName,
      body: commentBody
    }

    if (!commentName || !commentBody) {
      alert('Info Required!');
  }  else {
      $.post("/api/comment/", newComment, function() {
          window.location.href = "/comment";
        });
  }
    
    
  });
  