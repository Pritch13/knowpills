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
      var entry = "<div class='row'><div class='col l12'><div class='card'><div class='card-content'><span class='card-title'>"+title+"</span><p>"+body+"</br><a class='waves-effect waves-light btn learnmore forumMore'>See more</a></p><p class='right-align'>Created by "+username+"</p></div></div></div></div>";
      $(".forum-container").append(entry);
    }
  }
  
  
  // This function grabs posts from the database and updates the view
  function getPosts(category) {
    $.get("/api/posts", function(data) {
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
