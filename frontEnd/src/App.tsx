import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { routerConfig } from "./routerConfig";
import {BooksProvider} from "./components/BooksContext"
import {CartProvider} from "./components/CartContext/CartContext";

const hist = createBrowserHistory();

function App() {
  return (
    <BooksProvider >
    <CartProvider>
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
      </CartProvider>
      </BooksProvider>
      
  );
}

export default App;
