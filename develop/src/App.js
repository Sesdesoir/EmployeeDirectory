import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <Router>
          <Route exact path='/' component={Homepage} />
    </Router>

  </>
  );
} 

export default App;
