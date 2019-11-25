import React, { Component } from "react";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";
import { MovieList } from "./components/MovieList";

import "./App.css";
import "bulma/css/bulma.css";

class App extends Component {
  state = {
    results: [],
    usedSearch: false
  };

  handleResults = results => {
    this.setState({
      results,
      usedSearch: true
    });
  };

  renderResults() {
    return this.state.results.length === 0
    ? <p>No encontre nada!</p>
    : <MovieList movies={this.state.results}/>
  }

  render() {
    return (
      <div className="App">
        <Title>Buscador de Peliculas</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this.handleResults} />
        </div>
        {
          this.state.usedSearch
          ? this.renderResults()
          : <small>Buscar una pelicula...</small>
        }
      </div>
    );
  }
}

export default App;
