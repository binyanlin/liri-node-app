// spotify, bands in town, OMDB
require('dotenv').config();
var keys = require('./keys.js');
// var spotify = new Spotify(keys.spotify);
const axios = require('axios');
var moment = require('moment');


// node liri.js concert-this <artist/band name here>
// This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:
// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")
let action = process.argv[2];
let input = process.argv.slice(3).join(' ');

const concert = async function() {
  try {
    const response = await axios.get(`https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`);
    // console.log(response.data[0]);
    console.log('Venue Name: ' + response.data[0].venue.name);
    console.log('Venue Location: ' + response.data[0].venue.region);
    console.log('Time of Event: ' + moment(response.data[0].dateTime).format('MM/DD/YYYY'));
  } catch(e) {
    console.log(e);
  };
};
// spotify-this-song
// movie-this
const movie = async function() {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?t=${input}&y=&plot=short&apikey=trilogy`);
    console.log(response.data);
    console.log('Title: '+ response.data.Title);
    console.log('Year: '+ response.data.Year);
    console.log('IMDB Rating: '+ response.data.Ratings[0].Value);
    console.log('Rotten Tomatoes Rating: '+ response.data.Ratings[1].Value);
    console.log('Country of Production: ' + response.data.Country);
    console.log('Language: ' + response.data.Language);
    console.log('Plot: ' + response.data.Plot);
    console.log('Actors: ' + response.data.Actors);
  } catch(e) {
    console.log(e);
  };
}
// do-what-it-says

if (action === 'concert-this') {
  concert();
} if (action === 'spotify-this-song') {
  
} if (action === 'movie-this') {
  movie();
} if (action === 'do-what-it-says') {

};