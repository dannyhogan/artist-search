import Search from './Search/Search';
import React from 'react';
import Artist from './Artist/Artist';
import Release from './Release/Release';
import Song from './Song/Song';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Search}></Route>
      <Route path="/search" component={Search}></Route>
      <Route path="/artist/:name/:id" component={Artist}></Route>
      <Route path="/release/:name/:title/:id" component={Release}></Route>
      <Route path="/song/:name/:release/:id" component={Song}></Route>
    </Router>
  );
}
