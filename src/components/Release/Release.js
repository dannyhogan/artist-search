import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Songs from '../Songs/Songs';
import { getReleaseDetails } from '../../services/artistApi';

export default class Release extends Component  {

  state = {
    songs: []
  }

  static propTypes = {
    match: PropTypes.object
  };


  componentDidMount() {
    getReleaseDetails(this.props.match.params.id)
      .then(res => {
        this.setState({ songs: res.recordings });
      });
  }

  render() {

    const { name, title } = this.props.match.params;

    return (
      <>
        <h1>Songs from `{title}` by {name}.</h1>
        <Songs release={title} name={name} songs={this.state.songs} />
      </>
    );
  }
}
