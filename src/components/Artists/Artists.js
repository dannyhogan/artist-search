import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Artists.css';

export default function Artists({ artists }) {

  const artistLinks = artists.map(artist => {
    return <li key={artist.id}> <h1>{artist.name}</h1> <Link to={`/artist/${artist.name}/${artist.id}`}>View Releases</Link> </li>;
  });

  return (
    <ul className={styles.Artists}>
      {artistLinks}
    </ul>
  );
}

Artists.propTypes = {
  artists: PropTypes.array
};
