function tplawesome(e, t) {
  res = e;
  for (var n = 0; n < t.length; n++) {
    res = res.replace(/\{\{(.*?)\}\}/g, function(e, r) {
      return t[n][r];
    });
  }
  return res;
}

// API Key: AIzaSyA3zrBVpNgpIXLtpW4osabzm73W9gVZV38

// Creating an AJAX call for the specific movie button being clicked
$.ajax({
  method: "GET",
  url:
    "https://www.googleapis.com/youtube/v3/search?part=snippet&q=cat&key=AIzaSyA3zrBVpNgpIXLtpW4osabzm73W9gVZV38"
}).then(function(response) {
  console.log(response);
});

//ajax call to get search input and plug it into the youtube api url
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

$(function() {
  $("form").on("submit", function(e) {
    e.preventDefault();
    //prepare the request
    var request = gapi.client.youtube.search.list({
      part: "snippet",
      type: "video",
      q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
      maxResults: 3,
      order: "viewCount:",
      publishedAfter: "2015-01-01T00:00:00Z"
    });
    //execute the request
    request.execute(function(response) {
      var results = response.result;
      $("#results").html("");
      $.each(results, function(index, item) {
        console.log("item");
        $.get("tpl/video-item.html", function(data) {
          $("#results").append(
            tplawesome(data, [
              { title: item.snippet.title, videoid: item.id.videoId }
            ])
          );
        });
      });
    });
    resetVideoHeight();
  });
});

$(window).on("resize", resetVideoHeight);

function resetVideoHeight() {
  $(".video").css("height", ($("#results").width() * 9) / 16);
}

// function init() {
//   gapi.client.setApiKey("");
//   gapi.client.load("youtube", "v3", function() {
//     //youtube api is ready
//   });
// }

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
