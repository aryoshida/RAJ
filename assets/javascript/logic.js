var queryURL = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
});