// Initialize Firebase
var config = {
  apiKey: "AIzaSyCheLluXdaOQFsDgzUCAoIYa-fXdeorWaI",
  authDomain: "raj-movie-picker.firebaseapp.com",
  databaseURL: "https://raj-movie-picker.firebaseio.com",
  projectId: "raj-movie-picker",
  storageBucket: "raj-movie-picker.appspot.com",
  messagingSenderId: "18109117603"
};
firebase.initializeApp(config);

$(document).ready(function() {
  $("#age-submit").on("click", function(close) {
    event.preventDefault();
    $("#form-popup").hide();
    close();
  });
});

$(document).ready(function() {
  $("#genre-submit").on("click", function(event) {
    event.preventDefault();

    var genre = $("#genre-options").val();

    const queryURL =
      "https://api.themoviedb.org/3/discover/movie?api_key=296e1114acd1d3cf0a434c3e81844983&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=" +
      genre;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      $("#genre-option").text(JSON.stringify(response));

      for (var i = 0; i < 6; i++) {
        var movieName = response.results[i].title;
        var movieButton = $("<button>");
          movieButton.attr("data-movie", movieName);
          movieButton.addClass("movieButton btn btn-primary");
          movieButton.text(movieName);        
        var moviePoster ="https://image.tmdb.org/t/p/w200" + response.results[i].poster_path;
        var movieSynopsis = response.results[i].overview;

        var containerElement = $("#cards-go-here");

        displayCard();

        function displayCard(){

          var cardElement = createCardElement(movieButton, moviePoster, movieSynopsis, movieName);
          containerElement.prepend(cardElement);

        }

        function createCardElement(movieButton, moviePoster, movieSynopsis, movieName){
          var cardElement = $("<div>");
          cardElement.attr("class", "card");
          cardElement.attr("class", "col-md-4");
          
          var cardImage = $("<img>");
          cardImage.attr("src", moviePoster);
          cardElement.append(cardImage);

          var cardBody = $("<div>");
          cardBody.attr("class", "card-body");
          cardElement.append(cardBody);

          var cardTitle = $("<h5>");
          cardTitle.attr("class", "card-title");
          cardTitle.html(movieButton);
          cardElement.append(cardTitle);

          var cardText = $("<p>");
          cardText.attr("class", "card-text");
          cardText.html(movieSynopsis);
          cardBody.append(cardText);

          return cardElement;
        }

      }
      onClickAttach();
    });
  });
});
