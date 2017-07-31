var topics = ["Superman", "Batman", "Aquaman", "Spiderman"]

var queryURL = 'https://api.giphy.com/v1/gifs/search?q=superheroes&api_key=dc6zaTOxFJmzC';

//'http://api.giphy.com/v1/gifs/search?q=' + superheroes + '&api_key=dc6zaTOxFJmzC';

$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
     console.log(response);

var image = $('<img>').attr('src', response.data["0"].images.fixed_height_still.url);
$('.gifs').append(image);

 });

