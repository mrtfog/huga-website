import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SanityProvider } from "./context/SanityContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <SanityProvider>
      <App />
    </SanityProvider>
  </Router>
);
