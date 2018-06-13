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
      

    if (!name || !title || !body) {
        alert('Info Required!');
    }  else {
        $.post("/api/posts/", newPost, function() {
            window.location.href = "/support";
          });
    }

    // alert(name + title + body);
})


