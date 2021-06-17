import logo from './logo.svg';
import './App.css';

/*function App() {
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
      </header>
    </div>
  );
}

export default App;*/

import React, { Component } from 'react';
import { BrowserRouter as Router , Switch , Route,Redirect} from 'react-router-dom';
import Whatsapp from './components/whatsapp';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router >
          <Redirect to="/portfolio" />
          <Switch>
                  <Route path="/portfolio" exact component = {Whatsapp} />
          </Switch>
      </Router> 
    );
  }
}
 
export default App;
