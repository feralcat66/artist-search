import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Lyric from '../data/Lyrics/Lyrics';
import Release from '../data/Releases/Release';
import Artist from '../data/Artists/Artist';
import Search from '../data/Search/Search';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/lyrics/:artist/:title" component={Lyric} />
        <Route exact path="/releases/:artist/:releaseTitle/:releaseId" component={Release} />
        <Route exact path="/artists/:artist/:artistId" component={Artist} />
        <Route exact path="/:artist?" component={Search} />
      </Switch>
    </Router>
  );
}
