import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSongLyrics } from '../../services/artistApi';

export default class Song extends Component {

  state = {
    lyrics: ''
  }

  static propTypes = {
    match: PropTypes.object
  }

  componentDidMount() {
    getSongLyrics(this.props.match.params.name, this.props.match.params.id)
      .then(res => {
        this.setState({ lyrics: res.lyrics });
      });
  }

  render() {
    const { lyrics } = this.state;
    return (
      <section>
        <p>{lyrics}</p>
      </section>
    );
  }
}
