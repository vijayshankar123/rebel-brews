import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      </div>
        
        <Switch>
           <Route path="/home" component={Home} />
           <Route path="/" component={Landing} />
        </Switch>
    </Router>

   
  );
}

export default App;
