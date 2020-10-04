//frontend/src/app.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Item_List from './components/ItemList.js';
import PortfolioList from './components/PortfolioList.js';

class App extends Component {
  render(){
    return(
      <div>
        <Router>
        <nav  id="navbar" class="navbar">
        <div class="logo" color="black">
          <a>
            <img src={require('./images/로고.png')} alt="Joshua Sortino Logo" />
            </a>
        </div>
        <div class="showlist">
        <a class="word">
        <Link to="/item">
          SHOP
        </Link></a>
        <a class="pp"><Link to="/portfolio">
          PORTFOLIO
        </Link></a>
        </div>
        <div class="pic" color="black">
          <a>
            <img src={require('./images/티셔츠-뒤.png')} alt="Joshua Sortino Logo" />
            </a>
        </div>
        </nav>

        <div>
          <Route exact path ="/item" component={Item_List} />
          <Route exact path ="/portfolio" component={PortfolioList} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
