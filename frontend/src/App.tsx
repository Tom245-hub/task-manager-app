import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import HomePage from "./home/pages/HomePage";
import Footer from "./shared/components/Navigation/Footer";
import Header from "./shared/components/Navigation/Header";
import DashboardPage from "./dashboard/pages/DashboardPage";

const App = () => {
  const [isLogged, setIsLogged] = useState(true);
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
    <Router>
      <Header />
      <main>
        {isLogged ? (
          <>
            <aside>aside</aside>
            <section>{routes}</section>
          </>
        ) : (
          <section>{routes}</section>
        )}
      </main>
      <Footer />
    </Router>
  );
};

export default App;
