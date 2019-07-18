$.get("/api/feelings")
  .then(data=>{
    data.forEach(feeling=>{
      var option = $("<option>")
        option.attr("data-category", feeling.category)
        option.attr("data-feeling", feeling.feeling)
        option.text(feeling.feeling)
        $("#feelings").append(option)
    })
  })

  $("#survey").on("submit", function(event){
    event.preventDefault();
    var userResponse = {
      name: $("#submitterName").val().trim(),
      feeling: $("#feelings :selected").attr("data-feeling"),
      category: $("#feelings :selected").attr("data-category")
    };

    $.post("/api/response", userResponse)
    .then(data=>{
      console.log(data)
      window.location = "/results"
    })


  })
