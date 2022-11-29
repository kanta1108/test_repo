import ReactDOM from "react-dom/client";
import * as React from "react";

import Alert from "./Alert.tsx";

const App = (props) => {
  return (
    <div>
      <p>Hello React!</p>
      <Alert message="Hello React Alert!" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("reactRoot"));

if (reactRoot) {
  root.render(<App />);
} else {
  console.log("no root");
}
