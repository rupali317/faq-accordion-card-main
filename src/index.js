import React from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./components/Footer";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("main"));
const footer = ReactDOM.createRoot(document.getElementById("footer")); //or I can do div id="root" and within i have main id="main" annd i put the picture box as children of div id="root" and sibling of main id="main"

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
