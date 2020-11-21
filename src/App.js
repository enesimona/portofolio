import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Switch>
        <Route path="/" exact>
          <About></About>
        </Route>
        <Route path="/projects" exact>
          <Projects></Projects>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
