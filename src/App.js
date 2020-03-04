import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./containers";
import { Main, About, Error } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
