/*In this version, you will be making use of Constructor function, Prototype and new so as to practice using them.

Work incrementally but by the end of it you should have defined multiple prototype functions:
Library
Playlist
Track

A Library has a name and a creator (both strings): these are the only things required in order to create a music library
A Library has many playlists (starts as an empty array) - playlist objects can be added to an instance of a library */

class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylists(playlist) {
    this.playlists.push(playlist);
  }
}

// Each Playlist has a name which is required upon creation - a Playlist also has many tracks
// A Track has a title, a rating (an integer from 1 to 5) and a length (integer in seconds) all of which are required when creating a new track
// Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks
class Playlists {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }

  addTrack(track) {
    this.tracks.push(track);
  }

  overallRating() {
    let overallRating = 0;
      for (let track of this.tracks) {
        overallRating += track.rating;
      }
    return overallRating / this.tracks.length;
  }

// Each Playlist also has a totalDuration function which will sum the duration of all of its tracks
  totalDuration() {
    let totalDuration = 0;
      for (let track of this.tracks) {
        totalDuration += track.length;
      }
    return totalDuration;
  }
}

class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating; // array or function
    this.length = length; // length in seconds
  }

}

let testLibrary = new Library("Ariana Grande", "Woman");

let sweetener = new Playlists("sweetener");
testLibrary.addPlaylists(sweetener);

let track1 = new Track("Hold on", 5, 3);
let track2 = new Track("Not now", 4, 5);
let track3 = new Track("Later bud", 5, 4);

sweetener.addTrack(track1);
sweetener.addTrack(track2);
sweetener.addTrack(track3);

console.log("Library: " , testLibrary)
console.log("playlist: " , sweetener);
console.log("Overall Rating: " , sweetener.overallRating());
console.log("Total Duration: " , sweetener.totalDuration());