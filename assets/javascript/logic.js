const queryURL = "https://www.omdbapi.com/?t=" + userInput + "&y&plot=short&apikey=d87f932b"

var userInput;
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
});

