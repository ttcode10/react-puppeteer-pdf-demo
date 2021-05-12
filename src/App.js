import logo from './logo.svg';
import './App.css';
import {getPdf, test} from './apis';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => getPdf()}>Download PDF</button>
        <button onClick={() => test()}>Test API</button>
      </header>
    </div>
  );
}

export default App;
