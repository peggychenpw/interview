import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss"
import SearchPage from './page/searchPage/searchPage';


function App() {
  return (
    <Router >
      <Switch>
        <Route path="/search/:data?">
          <SearchPage />
        </Route>
        <Route path="/">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


