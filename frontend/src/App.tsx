import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./shared/utils/globalStyles";
import Theme from "./shared/utils/theme";

import HomePage from "./home/pages/HomePage";
import Footer from "./shared/components/Navigation/Footer";
import Header from "./shared/components/Navigation/Header";
import DashboardPage from "./dashboard/pages/DashboardPage";
import Aside from "./shared/components/Navigation/Aside";

const App: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);
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

export default App;
