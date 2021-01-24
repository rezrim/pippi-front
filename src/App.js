import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Menu from './component/Menu'
import Dashboard from './pages/Dashboard'
import PippiSay from './pages/PippiSay'
import PippiLive from './pages/PippiLive'
import PippiCollab from './pages/PippiCollab'
import Form from './pages/Form'

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
              <Route path="/pippiSay"><PippiSay /></Route>
              <Route path="/pippiLive"><PippiLive /></Route>
              <Route path="/pippiCollab"><PippiCollab /></Route>
              <Route path="/"><Dashboard /></Route>
            </Switch>

            </div>
          </div>
        </div>
    </div>
  </Router>
  );
}

export default App;
