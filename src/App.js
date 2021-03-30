// Components
import React, { Component, useState } from "react";

// Assets
import "./App.css";
import logo from "./assets/logo.svg";
import raw from "./assets/raw-vego-chocolate-bar.png";
import caramel from "./assets/caramel-vego-chocolate-bar.png";
import hazelnut from "./assets/hazelnut-vego-chocolate-bar.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selection: "",
      orderComplete: false,
      credit: 0,
      change: 0,
    }
  }

  render() {

    const updatePrice = (e) => {

      this.setState({
        credit: this.state.credit + Number(e.target.dataset.value)
      });

    }

    const updateSelection = (e) => {

      this.setState({
        selection: e.target.dataset.value
      });

    }

    return (
      <div className="main-container">

        <div className="vending-machine">

        <div className={this.state.orderComplete === "false" ? "success-message hide" : "success-message"}>
          <img src={ this.state.selection === "raw" ? raw : this.state.selection === "hazelnut" ? hazelnut : this.state.selection === "caramel" ? caramel : {} } />
          <h2>Enjoy your { this.state.selection } chocolate!</h2>
          <a className="more-chocolate-btn" href="#">More Chocolate Please! 🍫</a>
        </div>

          <section className="signage">
            <img src={ logo } />
            <h2>Vending Machine</h2>
          </section>

          <section className="money-container">
            <div className="money-input">
              <p>Enter how much you have:</p>
              <div className="options-container">
                <a className="option" data-value="0.10" href="#" onClick={(e) => updatePrice(e)}>10c</a>
                <a className="option" data-value="0.20" href="#" onClick={(e) => updatePrice(e)}>20c</a>
                <a className="option" data-value="0.50" href="#" onClick={(e) => updatePrice(e)}>50c</a>
                <a className="option" data-value="1" href="#" onClick={(e) => updatePrice(e)}>$1</a>
                <a className="option" data-value="2" href="#" onClick={(e) => updatePrice(e)}>$2</a>
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
              <div className={this.state.selection === "raw" ? "chocolate selected" : "chocolate"} data-value="raw" onClick={(e) => updateSelection(e)}>
                <img src={ raw } data-value="raw"/>
                <p className="title" data-value="raw">Organic Raw</p>
                <p className="price" data-value="raw">$2.00</p>
              </div>
              <div className={this.state.selection === "hazelnut" ? "chocolate selected" : "chocolate"} data-value="hazelnut" onClick={(e) => updateSelection(e)}>
                <img src={ hazelnut } data-value="hazelnut"/>
                <p className="title" data-value="hazelnut">Hazelnut</p>
                <p className="price" data-value="hazelnut">$3.10</p>
              </div>
              <div className={this.state.selection === "caramel" ? "chocolate selected" : "chocolate"} data-value="caramel" onClick={(e) => updateSelection(e)}>
                <img src={ caramel } data-value="caramel"/>
                <p className="title" data-value="caramel">Caramel</p>
                <p className="price" data-value="caramel">$2.50</p>
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
