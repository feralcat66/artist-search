  
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArtistItem = ({ artist, artistId, score, disambiguation = 'N/A' }) => {
  return (
    <Link to={`/artists/${artist}/${artistId}`}>
      <h1>{artist}</h1>
      <p>Match Score: {score}</p>
      <p>Disambiguation: {disambiguation}</p>
    </Link>
  );
};

ArtistItem.propTypes = {
  artist: PropTypes.string.isRequired,
  artistId: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  disambiguation: PropTypes.string
};

export default ArtistItem;
