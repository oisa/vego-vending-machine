import logo from './assets/logo.svg';
import './App.css';

// Components


function App() {



  return (
    <div className="main-container">

      <div className="vending-machine">

        <section className="signage">
          <img src={logo} />
          <p>Vending Machine</p>
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
              $0.20
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}

export default App;
