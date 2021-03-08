import React from 'react';
import { BrowserRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import Weather from './pages/Weather/Weather';
import Retro from './pages/Retro/Retro';
import Todos from './pages/Todos/Todos';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <div className={styles.nav}>
          <NavLink activeClassName={styles.activeLink} to='/weather'>Wheather</NavLink> | &nbsp;
          <NavLink activeClassName={styles.activeLink} to='/retro'>Retro</NavLink> | &nbsp;
          <NavLink activeClassName={styles.activeLink} to='/todos'>Todos</NavLink>
        </div>
        <Switch>
          <Route path='/weather'>
            <Weather />
          </Route>
          <Route path='/retro'>
            <Retro />
          </Route>
          <Route path='/todos'>
            <Todos />
          </Route>
          <Route>
            <Redirect to={'/weather'} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
