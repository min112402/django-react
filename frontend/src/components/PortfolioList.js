
import React, { Component } from 'react';
import '../css/PortfolioList.css';

class PortfolioList extends Component {
  state = {
      portfolio: []
  };

  async componentDidMount() {
      try {
          const res = await fetch('http://127.0.0.1:8000/api/portfolio');
          const portfolio = await res.json();
          this.setState({
              portfolio
          });
      } catch (e) {
          console.log(e);
      }
  }

  render() {
      return (
          <div class="portfolio">
          <div class = "p-nav">
            PORTFOLIO <hr class="line"/>
          </div>
              {this.state.portfolio.map(item => (
                  <ul key={item.id} class="lists">
                      <span>
                        <img src={item.photo} /></span>
                            <h1>{item.name}</h1>
                  </ul>
              ))}
          </div>
      );
  }
}

export default PortfolioList;
