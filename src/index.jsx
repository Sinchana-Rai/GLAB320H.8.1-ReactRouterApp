import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);




//--------------------------------
// import { StrictMode } from "react";

// import "./style.css";
// import App from "./App";

// // Import BrowserRouter and rename it to Router
// import { BrowserRouter as Router } from "react-router-dom";

// // Wrap the App component with the Router component to enable the router features.
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </StrictMode>,
// );

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )