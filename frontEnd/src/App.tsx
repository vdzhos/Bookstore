import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { routerConfig } from "./routerConfig";

const hist = createBrowserHistory();

function App() {
  return (
      <Router history={hist}>
        <Switch>
          {routerConfig.map((route) => {
            return (
              <Route
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Router>
  );
}

export default App;
