//get movie choice

function onClickAttach() {
  $(".movieButton").click(function () {
    // alert("Handler for .click() called.");
    console.log($(this).attr("data-movie"));
    var movieChoice = $(this).attr("data-movie");
    strLength = movieChoice.length;
    for (var i = 0; i < strLength; i++) {
      movieChoice = movieChoice.replace(" ", "+");
    }
    console.log(movieChoice);
    // Creating an AJAX call for the specific movie button being clicked
    //add new movie choice title to youtube api url in ajax
    $.ajax({
      method: "GET",
      url:
        "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" +
        movieChoice +
        "+trailer" +
        "&key=AIzaSyA3zrBVpNgpIXLtpW4osabzm73W9gVZV38"
    }).then(function (response) {
      console.log(response);
      //get from the response the video id
      var youtubeId = response.items[0].id.videoId;
      loadVid(youtubeId);
    });

    //show the video on the page
    function loadVid(youtubeId) {
      $('#youtube-popup').modal('toggle')

      $("#youtube_player").html(

        `<iframe width="100%" height="500" src="https://www.youtube.com/embed/${youtubeId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      );
    }

  });

}

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
