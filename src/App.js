import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './index.css';
import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import NotFound from './components/pages/NotFound';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

