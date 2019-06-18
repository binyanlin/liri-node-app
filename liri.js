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
    console.log(input + ' Events: \n')
    console.log('Venue Name: ' + response.data[0].venue.name);
    console.log('Venue Location: ' + response.data[0].venue.region);
    console.log('Time of Event: ' + moment(response.data[0].dateTime).format('MM/DD/YYYY'));
  } catch(e) {
    console.log(e);
  };
};
// spotify-this-song
// movie-this
// do-what-it-says

if (action === 'concert-this') {
  concert();
} if (action === 'spotify-this-song') {

} if (action === 'movie-this') {

} if (action === 'do-what-it-says') {

};