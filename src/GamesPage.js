import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import GamesList from './GamesList';
import { fetchGames, deleteGame } from './actions';

class GamesPage extends Component {
  state = {}

  componentDidMount() {
    this.props.fetchGames()
  }

  render() {
    return (
      <div>
        GameList

        <GamesList games={this.props.games} deleteGame={this.props.deleteGame}/>
      </div>
    );
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
  fetchGames: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps, { fetchGames, deleteGame })(GamesPage);
