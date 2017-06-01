import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import MovieComponent from './components/movie'


class App extends Component {

  state = {
    movies: null
  }

  componentDidMount() {
    fetch("http://localhost:9999/movies")
    .then(res => res.json())
    .then(movies => {this.setState({movies}); console.log("fetch", this)})
  }


  render() {
    console.log("this", this)
    const {movies} = this.state
    return (
      <Router>
      <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <div>
      {
        movies ? movies.map(movie => (<span> {movie.name} </span>)) : (<span>Loading...</span>)
      }
      </div>
      <Link to={'/1'}>
      link to one
      </Link>
            <Route path="/1" component={MovieComponent}/>
      </div>
      </Router>
    );
  }


}

export default App;