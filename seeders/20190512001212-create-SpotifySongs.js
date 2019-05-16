'use strict';

const songs = [{"artist_name":"MasakoXtreme","track_id":"1LsguAS27aXmAifE0VcHTY","track_name":"Chase","acousticness":0.718,
  "danceability":0.41600000000000004,"duration_ms":98945,"energy":0.371,"instrumentalness":0,"key":6,"liveness":0.11699999999999999,
  "loudness":-10.735,"mode":0,"speechiness":0.0295,"tempo":159.91,"time_signature":4,"valence":0.142,"popularity":23},
  {"artist_name":"Wisp X","track_id":"5MzHIInNF1TODPPvjYJ7QZ","track_name":"Cosmic Fate","acousticness":0.00023700000000000001,
    "danceability":0.405,"duration_ms":152471,"energy":0.938,"instrumentalness":0.67,"key":2,"liveness":0.284,"loudness":-3.284,
    "mode":0,"speechiness":0.0352,"tempo":170.067,"time_signature":4,"valence":0.363,"popularity":19},{"artist_name":"King Tubby",
    "track_id":"0DdC0Wdg8eAblphbXIYc2L","track_name":"Rasta Dub","acousticness":0.172,"danceability":0.7170000000000001,
    "duration_ms":165783,"energy":0.369,"instrumentalness":0.945,"key":7,"liveness":0.138,"loudness":-12.863,"mode":1,
    "speechiness":0.044000000000000004,"tempo":144.239,"time_signature":4,"valence":0.6579999999999999,"popularity":8},{
  "artist_name":"King Tubby","track_id":"007Ghv7LHpvYlgVGFvpwlX","track_name":"Mistry Maker Dub","acousticness":0.0135,
    "danceability":0.743,"duration_ms":153042,"energy":0.389,"instrumentalness":0.915,"key":7,"liveness":0.11199999999999999,
    "loudness":-14.443,"mode":1,"speechiness":0.0912,"tempo":69.065,"time_signature":4,"valence":0.44799999999999995,"popularity":8}
    ,{"artist_name":"Mind Flood","track_id":"2iKwpxCRnfyHALMmjT80tZ","track_name":"Space Shockin'","acousticness":0.11900000000000001,
    "danceability":0.775,"duration_ms":259317,"energy":0.679,"instrumentalness":0,"key":0,"liveness":0.11900000000000001,
    "loudness":-4.948,"mode":1,"speechiness":0.389,"tempo":150.127,"time_signature":4,"valence":0.8190000000000001,"popularity":0},
{"artist_name":"Mind Flood","track_id":"5c046RDTeIVJ4vEKYHfoCX","track_name":"Bangged Up","acousticness":0.42100000000000004,
    "danceability":0.605,"duration_ms":287608,"energy":0.632,"instrumentalness":0,"key":0,"liveness":0.147,"loudness":-5.862,
    "mode":0,"speechiness":0.456,"tempo":120.492,"time_signature":4,"valence":0.381,"popularity":0},{"artist_name":"Mind Flood",
    "track_id":"0pFzQLoPNPyXGvbC9dkyDJ","track_name":"The Plug","acousticness":0.165,"danceability":0.7859999999999999,
    "duration_ms":212323,"energy":0.525,"instrumentalness":0,"key":1,"liveness":0.512,"loudness":-4.745,"mode":1,
    "speechiness":0.198,"tempo":137.995,"time_signature":4,"valence":0.293,"popularity":0},{"artist_name":"Mind Flood",
    "track_id":"2k75LNHhVfyvyGhEokI465","track_name":"Lites Out","acousticness":0.0144,"danceability":0.7509999999999999,
    "duration_ms":236382,"energy":0.895,"instrumentalness":0,"key":2,"liveness":0.384,"loudness":-5.47,"mode":1,"speechiness":0.0442,
    "tempo":136.911,"time_signature":4,"valence":0.551,"popularity":0}]

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
     */
    // need to rework this
    var createNUpdate = songs.map(function (s) {
      s.createdAt = new Date();
      s.updatedAt = new Date();
      return s
    })
    return queryInterface.bulkInsert('SpotifySongs',createNUpdate,{})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

     */
      return queryInterface.bulkDelete('SpotifySongs', null, {});

  }
};
