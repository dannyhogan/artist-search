import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Songs.css';
import note from '../../assets/note.png';
import i from '../../assets/i.png';

export default function Songs({ songs, name, release }) {

  const songList = songs.map(song => {
    return <li key={song.id}>
      <img src={note}></img>
      <Link to={`/song/${name}/${release}/${song.title}`}>{song.title}</Link>
    </li>;
  });

  return (
    <ul className={styles.Songs}>
      <div>
        <img src={i}></img>
        <p>Click on a song to view the lyrics!</p>
      </div>
      {songList}
    </ul>
  );
}

Songs.propTypes = {
  songs: PropTypes.array,
  name: PropTypes.string,
  release: PropTypes.string
};
