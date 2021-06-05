import React from "react";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./shared/utils/globalStyles";
import Theme from "./shared/utils/theme";

import configureStore from "./shared/data/store";

import { RootState } from "./shared/data/reducers/rootReducers";

import HomePage from "./home/pages/HomePage";
import Footer from "./shared/components/Navigation/Footer";
import Header from "./shared/components/Navigation/Header";
import DashboardPage from "./dashboard/pages/DashboardPage";
import Aside from "./shared/components/Navigation/Aside";

import "./App.css";

const store = configureStore();

const App: React.FC = () => {
  const isLogged = useSelector((state: RootState) => state.user.user.user);
  let routes;

  if (isLogged) {
    routes = (
      <Switch>
        <Route path='/dashboard' exact>
          <DashboardPage />
        </Route>
        <Redirect to='/dashboard' />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Redirect to='/' />
      </Switch>
    );
  }

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <main>
          {isLogged ? (
            <>
              <Aside>aside</Aside>
              <section>{routes}</section>
            </>
          ) : (
            <section>{routes}</section>
          )}
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

const RootApp: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default RootApp;
