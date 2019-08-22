import React, { Component } from 'react';
import Artists from '../Artists/Artists';
import Pagination from '../Pagination/Pagination';
import { searchArtists } from '../../services/artistApi';

class Search extends Component {

  state = {
    search: '',
    artists: [],
    page: 1
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const offset = (this.state.page - 1) * 25;
    searchArtists(this.state.search, offset)
      .then(res => {
        this.setState({ artists: res.artists, artistCount: res.count });
      });
  };

  pageUp = () => {
    this.setState(state => ({ page: state.page + 1 }));
  }

  pageDown = () => {
    this.setState(state => ({ page: state.page - 1 }));
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page) {
      const offset = (this.state.page - 1) * 25;
      searchArtists(this.state.search, offset)
        .then(res => {
          this.setState({ artists: res.artists });
        });
    }
  }

  render() {
    return (
      <section>
        <h1>Search for an artist:</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="search" onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
        <Pagination pageUp={this.pageUp} pageDown={this.pageDown} page={this.state.page} count={this.state.artistCount}/>
        <Artists artists={this.state.artists}/>
      </section>
    );
  }
}

export default Search;
