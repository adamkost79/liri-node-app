var command = process.argv[2];

// Function to map each command to it's corresponding function
	switch(command) {
		case "spotify-this-song":
			if(query === "") {
				spotifySearch("the sign");
			}else {
				spotifySearch(query);
			}
			break;

		case "my-tweets":
			Twitter.gotData;
			break;

		case "movie-this":
			fetchMovieDetails(query);
			break;

		case "do-what-it-says":
			doWhatRandomFileSays();
			break;

		default:
			console.log("Enter: 'node liri.js' + any of the following: 'spotify-this-song <songName>', 'my-tweets', 'movie-this <movieName>', or 'do-what-it-says'");
			break;
	}


//twitter
var Twitter = require('twitter');

var command = process.argv[2];

var params = {
  q: 'MonsterFists',
  count: 4
};

client.get('search/tweets',params, gotData);

function gotData(error, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
}

//spotify
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: "07d7c8183c624fc0a405810c325a7c2e",
  secret: "5616f6048de9427f8e6608181f5f6eac"
});

var query = process.argv[3];

function spotifySearch(parameter) {spotify.search({ type: 'track', query: "" }, function(err, data) {
  if (err) {
    console.log('Error occurred: ' + err);
    console.log(
      `Artist: ${song.artists.name} \n
      Song Name: ${song.name} \n
      Preview: ${song.preview_url} \n
      Album: ${song.album.name}`);

}
});
}
