# liri-node-app

## About me:

This application uses node packages and 3 different APIs to query songs, artists, and movies from Spotify, IMDB, and Bands In Town. It uses NPM and node.js in conjunction with command line prompts to retrieve desired data as JSON from certain sites.

## Commands and sample use:
in the terminal, input "node liri.js |actionhere| |inputfield|"

node liri.js concert-this lady gaga

node liri.js spotify-this-song brave sara bareilles

node liri.js movie-this V for Vendetta

node liri.js do-what-it-says (takes no input)

### Additional Information
<actionhere> can take 4 queries:
  
concert-this: searches bands in town API for the Venue Name, Venue Location, and Time of Event

spotify-this song: searches spotify for song name and gives information on the Artist, Song Name, Album Name, and gives a preview URL for the song.

movie-this: searches the online movie database and returns various information about the movie

do-what-it-says: takes no input but reads a text file which contains a command that one of the other 3 actions can enact

### Technologies Used:
Javascript, Jquery, Node.js, AXIOS requests, .env, module.exports(), file system

For example of queries, follow this link:

![alt text](https://imgur.com/a/6FD71rU)
