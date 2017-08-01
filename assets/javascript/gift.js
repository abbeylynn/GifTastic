var topics = ["Superman", "Batman", "Aquaman", "Spiderman"];

function renderButtons() {
  $(".button-holder").empty();

  for (var j = 0; j < topics.length; j++) {
    var newButton = $("<button>");
    newButton.addClass("superhero");
    newButton.attr("data-name", topics[j]);
    newButton.text(topics[j]);
    $(".button-holder").append(newButton);
  };
};

renderButtons();

$("#new-search").on("click", function(event) {
  event.preventDefault();
  var addButton = $("#search-input").val().trim();
  topics.push(addButton);
  renderButtons();
});

$(document.body).on("click", ".superhero", function() {

  $('.gifs').empty();

  var hero = $(this).attr("data-name");

  console.log(hero)

  var queryURL =
    "http://api.giphy.com/v1/gifs/search?q=" +
    hero +
    "&api_key=dc6zaTOxFJmzC";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);

    var results = response.data;

    for (var i = 0; i < 10; i++) {
      var image = $("<img>");

      image.attr("src", response.data[i].images.fixed_height_still.url);
      $(".gifs").append(image);
    }
  });
});



