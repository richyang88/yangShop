import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import HelloWorld from './components/HelloWorld.js'
import User from './components/UserView.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        Testing
      </div>
        <Switch>
          {/* <Route exact path="/" component={HelloWorld}/> */}
          <Route exact path="/" component={User}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
