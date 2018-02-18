import React, { Component } from 'react';
import { Link, Match } from 'react-router';
import GamesPage from './GamesPage';
import GameFormPage from './GameFormPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='ui container'>
        <div className='ui three item menu'>
          <Link to="/" activeClassName="active" activeOnlyWhenExact className='item'>Home</Link>
          <Link to="/games" activeClassName="active" activeOnlyWhenExact className='item'>Games</Link>
          <Link to="/games/new" activeClassName="active" activeOnlyWhenExact className='item'>Add new game</Link>
        </div>

        <Match exactly pattern="/games" component={GamesPage} />
        <Match pattern="/games/new" component={GameFormPage} />
        <Match pattern="/game/:_id" component={GameFormPage} />
      </div>
    );
  }
}

export default App;
