'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SpotifyAudioFeaturesApril2019s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      artist_name: {
        type: Sequelize.STRING
      },
      track_id: {
        type: Sequelize.STRING
      },
      track_name: {
        type: Sequelize.STRING
      },
      acousticness: {
        type: Sequelize.FLOAT
      },
      danceability: {
        type: Sequelize.FLOAT
      },
      duration_ms: {
        type: Sequelize.FLOAT
      },
      energy: {
        type: Sequelize.FLOAT
      },
      instrumentalness: {
        type: Sequelize.FLOAT
      },
      key: {
        type: Sequelize.FLOAT
      },
      liveness: {
        type: Sequelize.FLOAT
      },
      loudness: {
        type: Sequelize.FLOAT
      },
      mode: {
        type: Sequelize.FLOAT
      },
      speechiness: {
        type: Sequelize.FLOAT
      },
      tempo: {
        type: Sequelize.FLOAT
      },
      time_signature: {
        type: Sequelize.FLOAT
      },
      valence: {
        type: Sequelize.FLOAT
      },
      popularity: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SpotifyAudioFeaturesApril2019s');
  }
};