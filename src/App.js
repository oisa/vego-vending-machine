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
      selectionPrice: 0,
      orderComplete: false,
      credit: 0,
      change: 0,
      errorMessage: "",
    }
  }

  test(n1, n2) {
    return (n1 + n2);
  }

  render() {

    const newOrder = () => {

      this.setState({
        selection: "",
        orderComplete: false,
        credit: this.state.credit - this.state.selectionPrice,
        errorMessage: "",
      })

    }

    const updatePrice = (e) => {

      let input = Number(e.target.dataset.value)

      // Accounts for if user manages an input other than the accepted denominations
      if (input === 0.10 || input === 0.20 || input === 0.50 || input === 1 || input === 2) {
        this.setState({
          credit: this.state.credit + input,
          errorMessage: "",
        });
      } else {
        this.setState({
          errorMessage: "10c, 20c, 50c, $1 or $2 accepted only."
        })
      }

    }

    const updateSelection = (e) => {

      this.setState({
        selection: e.target.dataset.name,
        selectionPrice: Number(e.target.dataset.value)
      });

    }

    const processOrder = () => {

      // Only processes the order if credit is larger than or equal to (not including if both ar $0) the selected chocolate. Also only runs if user has selected a chocolate.
      if (this.state.credit >= this.state.selectionPrice && this.state.credit != 0 && this.state.selection != "") {
        this.setState({
          orderComplete: true,
          errorMessage: "",
          change: this.state.credit - this.state.selectionPrice,
        });
      } else {
        this.setState({
          errorMessage: "Not enough dollarydoos!",
        })
      }

      if (this.state.selection === "") {
        this.setState({
          errorMessage: "Make a selection first!"
        })
      }

    }

    return (
      <div className="main-container">

        <div className="vending-machine">

          <div className={this.state.orderComplete === false ? "success-message hide" : "success-message"}>
            <img src={ this.state.selection === "raw" ? raw : this.state.selection === "hazelnut" ? hazelnut : this.state.selection === "caramel" ? caramel : {} } alt={`${ this.state.selection.charAt(0).toUpperCase() + this.state.selection.slice(1) } Vegan Chocolate Bar Image`} />
            <h2>Enjoy your { this.state.selection } chocolate!</h2>
            <a className="more-chocolate-btn" href="#" onClick={() => newOrder()}>More Chocolate Please! 🍫</a>
            <p>You have ${ this.state.change.toFixed(2) } change left over.</p>
          </div>

          <div className={this.state.errorMessage != "" ? "error-message" : "error-message hide"}>
            { this.state.errorMessage }
          </div>

          <section className="branding">
            <img src={ logo } alt="Vego Vegan Chocolate Vending Machine Logo" />
            <h2>Vending Machine</h2>
          </section>

          <section className="money-container">
            <div className="money-input">
              <p>Enter how much you have:</p>
              <div className="options-container">
                <a className="option" data-value="0.10" href="#" alt="10c" onClick={(e) => updatePrice(e)}>10c</a>
                <a className="option" data-value="0.20" href="#" alt="20c" onClick={(e) => updatePrice(e)}>20c</a>
                <a className="option" data-value="0.50" href="#" alt="50c" onClick={(e) => updatePrice(e)}>50c</a>
                <a className="option" data-value="1" href="#" alt="$1" onClick={(e) => updatePrice(e)}>$1</a>
                <a className="option" data-value="2" href="#" alt="$2" onClick={(e) => updatePrice(e)}>$2</a>
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
              <div className={this.state.selection === "raw" ? "chocolate selected" : "chocolate"} data-name="raw" onClick={(e) => updateSelection(e)}>
                <img src={ raw } data-name="raw" data-value="2" alt="Organic Raw Chocolate Bar"/>
                <p className="title" data-name="raw" data-value="2" alt="Organic Raw">Organic Raw</p>
                <p className="price" data-name="raw" data-value="2" alt="$2.00">$2.00</p>
              </div>
              <div className={this.state.selection === "hazelnut" ? "chocolate selected" : "chocolate"} data-name="hazelnut" onClick={(e) => updateSelection(e)}>
                <img src={ hazelnut } data-name="hazelnut" data-value="3.1" alt="Hazelnut Chocolate Bar"/>
                <p className="title" data-name="hazelnut" data-value="3.1" alt="Hazelnut">Hazelnut</p>
                <p className="price" data-name="hazelnut" data-value="3.1" alt="$3.10">$3.10</p>
              </div>
              <div className={this.state.selection === "caramel" ? "chocolate selected" : "chocolate"} data-name="caramel" onClick={(e) => updateSelection(e)}>
                <img src={ caramel } data-name="caramel" data-value="2.5" alt="Caramel Chocolate Bar"/>
                <p className="title" data-name="caramel" data-value="2.5" alt="Caramel">Caramel</p>
                <p className="price" data-name="caramel" data-value="2.5" alt="$2.50">$2.50</p>
              </div>
            </div>

          </section>

          <section className="retrieve-container">

            <a className="retrieve-btn" href="#" alt="Get chocolate button" onClick={() => processOrder()}>Get Chocolate! 🍫</a>

          </section>

        </div>

      </div>
    );
  }
}

export default App;
