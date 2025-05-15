import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [clickedFrontend, setClickedFrontend] = useState(false);
  const [clickedBackend, setClickedBackend] = useState(false);
  const [message, setMessage] = useState('Click One of the Buttons')

  useEffect(() => {
    if (clickedBackend) {
      setClickedBackend(false);
      const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({})
      }
      const fetchData = async () => {
          await fetch('http://localhost:5000/api/example', requestOptions)
              .then((res) => res.json())
              .then((data) => {
                  setMessage(data.message)
              })
      }
      fetchData();
    }

    else if (clickedFrontend) {
      setClickedFrontend(false);
      setMessage('Frontend Message')
    }
  }, [clickedFrontend, clickedBackend])

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <button onClick={() => setClickedFrontend(true)}>Display Frontend Message</button>
        <br></br>
        <button onClick={() => setClickedBackend(true)}>Display Backend Message</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
  );
}

export default App;
