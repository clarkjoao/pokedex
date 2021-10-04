import Main from "pages/Main";
import Details from "pages/Details";
import React from "react";
import { Switch, Route } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/details/:id" component={Details} />
      <Route path="/" component={Main} />
    </Switch>
  );
};

export default Routes;
