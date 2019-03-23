// API Key: AIzaSyA3zrBVpNgpIXLtpW4osabzm73W9gVZV38

// Creating an AJAX call for the specific movie button being clicked
$.ajax({
  url:
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyA3zrBVpNgpIXLtpW4osabzm73W9gVZV38",
  method: "GET"
}).then(function(response) {
  console.log(response);
});

function searchByKeyword() {
  var results = YouTube.Search.list("id,snippet", {
    q: "dogs",
    maxResults: 25
  });

  for (var i in results.items) {
    var item = results.items[i];
    Logger.log("[%s] Title: %s", item.id.videoId, item.snippet.title);
  }
}
//NOTE: We may need to do more with 0auth2_Scopes but for now our api is working *Robyn

//These are the links where I got my information:
// https://developers.google.com/youtube/v3/docs/search/list
// https://developers.google.com/youtube/v3/code_samples/javascript
// https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?part=snippet&maxResults=25&q=surfing&_h=3&

// The client ID is obtained from the {{ Google Cloud Console }}
// at {{ https://cloud.google.com/console }}.
// If you run this code from a server other than http://localhost,
// you need to register your own client ID.
//var OAUTH2_CLIENT_ID = '__YOUR_CLIENT_ID__';
// var OAUTH2_SCOPES = [
//     'https://www.googleapis.com/auth/youtube'
// ];

// Upon loading, the Google APIs JS client automatically invokes this callback.
// googleApiClientReady = function () {
//     gapi.auth.init(function () {
//         window.setTimeout(checkAuth, 1);
//     });
// }
