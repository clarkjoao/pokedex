import React from "react";
import { store } from "store";
import { Provider } from "react-redux";
import Main from "pages/Main";
import "styles/styles.scss";

const App: React.FC = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
