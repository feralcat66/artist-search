import React from 'react';
import PropTypes from 'prop-types';

const Song = ({ songTitle = 'Hello Darkness My Old Friend', songLyrics = 'No Lyrics Found' }) => (
  <>
    <h3>{songTitle}</h3>
    <p>{songLyrics}</p>
  </>
);

Song.propTypes = {
  songTitle: PropTypes.string.isRequired,
  songLyrics: PropTypes.string
};

export default Song;
