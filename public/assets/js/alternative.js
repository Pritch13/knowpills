function getAlts (category) {
    $.get("/api/alt", function(data) {

      console.log(data);

        for (let i = 0; i < data.length; i++) {
          var name = data[i].name;
          var details = data[i].details;
          var entry = "<div class='col l3'><div class='card medium'><div class='card-content'><span class='card-title'>"+name+"</span><p>"+details+"</br></p></div></div></div>";
          $(".alt-container").append(entry);
        }

    });
  }

  getAlts();