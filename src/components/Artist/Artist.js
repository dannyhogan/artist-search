import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Releases from '../Releases/Releases';
import styles from './Artist.css';
import { getArtistReleases } from '../../services/artistApi';

export default class Artist extends Component {

  state = {
    releases: []
  }

  static propTypes = {
    match: PropTypes.object
  };


  componentDidMount() {
    getArtistReleases(this.props.match.params.id)
      .then(res => {
        this.setState({ releases: res.releases });
      });
  }

  render() {
    const { name } = this.props.match.params;
    return (
      <section className={styles.Artist}>
        <h1>Releases by {name}</h1>
        <Releases artist={name} releases={this.state.releases}/>
      </section>
    );
  }
}
