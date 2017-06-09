import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));
 
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider>
            <Home>
            </Home>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }

}
injectTapEventPlugin();
export default App;