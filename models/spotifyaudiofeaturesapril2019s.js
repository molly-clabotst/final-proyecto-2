'use strict';
module.exports = (sequelize, DataTypes) => {
  const SpotifyAudioFeaturesApril2019s = sequelize.define('SpotifyAudioFeaturesApril2019s', {
    artist_name: DataTypes.STRING,
    track_id: DataTypes.STRING,
    track_name: DataTypes.STRING,
    acousticness: DataTypes.FLOAT,
    danceability: DataTypes.FLOAT,
    duration_ms: DataTypes.FLOAT,
    energy: DataTypes.FLOAT,
    instrumentalness: DataTypes.FLOAT,
    key: DataTypes.FLOAT,
    liveness: DataTypes.FLOAT,
    loudness: DataTypes.FLOAT,
    mode: DataTypes.FLOAT,
    speechiness: DataTypes.FLOAT,
    tempo: DataTypes.FLOAT,
    time_signature: DataTypes.FLOAT,
    valence: DataTypes.FLOAT,
    popularity: DataTypes.FLOAT
  }, {});
  SpotifyAudioFeaturesApril2019s.associate = function(models) {
    // associations can be defined here
  };
  return SpotifyAudioFeaturesApril2019s;
};