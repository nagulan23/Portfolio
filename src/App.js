import './App.css';


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
