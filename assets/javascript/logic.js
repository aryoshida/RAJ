const queryURL =
  "https://www.omdbapi.com/?t=" + userInput + "&y&plot=short&apikey=d87f932b";

var userInput;
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});

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
