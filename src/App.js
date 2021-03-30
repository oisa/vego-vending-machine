import logo from './assets/logo.svg';
import './App.css';

// Components


function App() {



  return (
    <div className="main-container">

      <div className="vending-machine">

        <div className="signage">
          <img src={logo} />
          <p>Vending Machine</p>
        </div>

        <div className="total">

        </div>

        <div className="money-input">

        </div>

      </div>

    </div>
  );
}

export default App;
