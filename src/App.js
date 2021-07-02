import './App.css';


import React, { Component } from 'react';
import { BrowserRouter as Router , Switch , Route,Redirect} from 'react-router-dom';
import Whatsapp from './components/whatsapp';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
ReactGA.initialize('G-QW51145W5X');

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router history={history}>
          <Redirect to="/portfolio" />
          <Switch>
                  <Route path="/portfolio" exact component = {Whatsapp} />
          </Switch>
      </Router> 
    );
  }
}
 
export default App;
