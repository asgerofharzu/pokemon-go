import React, { Component } from 'react';
import Header from './components/Header';
import PokemonGame from './components/Pokemon';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <Header />
        <PokemonGame />
      </React.Fragment>
    );
  }
}

export default App;