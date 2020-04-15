import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { Main, About, Error } from "./pages";
import { Header } from "./containers";
import Quiz from "./pages/Quiz";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="*" component={Error} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
