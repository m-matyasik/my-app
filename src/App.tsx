import React from 'react';
import NewButton from './components/NewButton';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Żart
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
<>
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Żart
      </p>

      <NewButton />


      
    </header>
  </div>

</>
    
  );
}


export default App;