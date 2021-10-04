import React from "react";
import { store } from "store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "styles/styles.scss";
import Routes from "routes";

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
);

export default App;
