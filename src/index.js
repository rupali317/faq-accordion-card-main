import React from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./components/Footer";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("main"));
const footer = ReactDOM.createRoot(document.getElementById("footer"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
