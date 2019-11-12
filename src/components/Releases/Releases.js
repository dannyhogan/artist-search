import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Releases.css';
import placeholder from '../../assets/record.png';

export default function Releases({ releases, artist }) {

  const releaseLinks = releases.map(release => {
    const coverArt = release['cover-art-archive'].count ? `http://coverartarchive.org/release/${release.id}/front` : placeholder;
    return <li key={release.id}>
      <Link to={`/release/${artist}/${release.title}/${release.id}`}>
        <img src={coverArt}></img>
        <h2>{release.title}</h2>
        <p>{release.date}</p>
      </Link>
    </li>;
  });

  return (
    <ul className={styles.Releases}>
      {releaseLinks}
    </ul>
  );
}

Releases.propTypes = {
  releases: PropTypes.array,
  artist: PropTypes.string
};
