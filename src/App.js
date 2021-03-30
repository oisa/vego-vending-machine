// Assets
import './App.css';
import logo from './assets/logo.svg';
import raw from './assets/raw-vego-chocolate-bar.png';
import caramel from './assets/caramel-vego-chocolate-bar.png';
import hazelnut from './assets/hazelnut-vego-chocolate-bar.png';

// Components
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selection: "",
      credit: 0.00,
    }
  }



  render() {
    return (
      <div className="main-container">

        <div className="vending-machine">

          <section className="signage">
            <img src={ logo } />
            <h2>Vending Machine</h2>
          </section>

          <section className="money-container">
            <div className="money-input">
              <p>Enter how much you have:</p>
              <div className="options-container">
                <a className="option" value="0.10"href="#">10c</a>
                <a className="option" value="0.20" href="#">20c</a>
                <a className="option" value="0.50" href="#">50c</a>
                <a className="option" value="1" href="#">$1</a>
                <a className="option" value="2" href="#">$2</a>
              </div>
            </div>

            <div className="total">
              <p>Total credit:</p>
              <div className="total-display">
                ${ this.state.credit.toFixed(2) }
              </div>
            </div>
          </section>

          <h3>Choose a chocolate!</h3>

          <section className="selection-container">
            <div className="chocolates-container">
              <div className="chocolate">
                <img src={ raw }/>
                <p className="title">Organic Raw</p>
                <p className="price">$2.00</p>
              </div>
              <div className="chocolate">
                <img src={ hazelnut } />
                <p className="title">Hazelnut</p>
                <p className="price">$3.10</p>
              </div>
              <div className="chocolate">
                <img src={ caramel }/>
                <p className="title">Caramel</p>
                <p className="price">$2.50</p>
              </div>
            </div>

          </section>

          <section className="retrieve-container">

            <a className="retrieve-btn" href="#">Retrieve Chocolate! 🍫</a>

          </section>

        </div>

      </div>
    );
  }
}

export default App;
