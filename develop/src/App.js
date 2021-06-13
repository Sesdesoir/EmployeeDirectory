import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>

    <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
        </Switch>
    </Router>

  </>
  );
} 

export default App;
