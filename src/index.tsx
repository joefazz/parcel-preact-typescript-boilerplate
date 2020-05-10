import { render } from "preact";

import App from "./App";

const node = document.getElementById('root');

render(<App />, node);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
