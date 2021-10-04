import Main from "pages/Main";
import Details from "pages/Details";
import React from "react";
import { Switch, Route } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/details" component={Details} />
    </Switch>
  );
};

export default Routes;
