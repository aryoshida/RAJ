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

$(document).ready(function(){

    $("#genre-submit").on("click", function(event){

        event.preventDefault();

        var genre = $("#genre-options").val();

        // const queryURL = "https://www.omdbapi.com/?t=" + genre + "&y&plot=short&apikey=d87f932b"

        const queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=296e1114acd1d3cf0a434c3e81844983&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=" + genre; 

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
            $("#genre-option").text(JSON.stringify(response));

            for (var i = 0; i < 5; i++){
                var movieName = response.results[i].title;
                var moviePoster = response.results[i].poster_path;
                var movieSynopsis = response.results[i].overview;

                var newRow = $("<tr>").append(
                    $("<td>").text(""),
                    $("<td>").text(movieName),
                    $("<td>").text("moviePoster"),
                    $("<td>").text(movieSynopsis)
                );

                $("#movie-table > tbody").append(newRow);

            }


        });

    });




    });
