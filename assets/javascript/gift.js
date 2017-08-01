var topics = ["Superman", "Batman", "Aquaman", "Spiderman"];

console.log(topics.length);

function renderButtons() {
  $(".button-holder").empty();

  for (var i = 0; i < topics.length; i++) {
    var newButton = $("<button>");
    newButton.addClass("superhero");
    newButton.attr("data-name", topics[i]);
    newButton.text(topics[i]);
    $(".button-holder").append(newButton);
  }
}

$("#new-search").on("click", function(event) {
  event.preventDefault();
  var addButton = $("#search-input").val().trim();
  topics.push(addButton);
  renderButtons();
});

renderButtons();
