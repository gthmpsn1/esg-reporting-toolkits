import React from "react";
import ReactDOMClient from "react-dom/client";
import "./css/index.css";
import App from "./components/App";
import {BrowserRouter as Router} from "react-router-dom";
import ScrollToTop from "./scrollToTop";

const root = ReactDOMClient.createRoot(
    document.getElementById('root')
);


root.render(
        <Router basename={process.env.PUBLIC_URL}>
            <ScrollToTop />
            <App />
        </Router>
);