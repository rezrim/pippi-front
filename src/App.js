import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Menu from './component/Menu'
import From from './pages/Form'

function App() {
  return (
    <Router>
    <div class="page-container">
      <Menu/>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
	      <div class="left-content">
	        <div class="inner-content">
            <div class="outter-wp">
            	
            <Switch>
              <Route path="/">
                <From />
              </Route>
            </Switch>

            </div>
          </div>
        </div>
    </div>
  </Router>
  );
}

export default App;
