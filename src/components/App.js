import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Main from '../pages/Main';
import Auth from '../pages/Auth';
import NotFound from '../pages/NotFound';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact={true} component={Main} />
          <Route path="/auth/:kind" exact={true} component={Auth} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
