import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Home from './Home'; 
import Search from './Search';
import Header from './Header';

class App extends Component{
  render() {
    return (
      <div className="container" id="container">
        <BrowserRouter>
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
        </div>
        </BrowserRouter>
      </div>
    );
  }
}
//export default connect(null, actions)(App);
export default App;