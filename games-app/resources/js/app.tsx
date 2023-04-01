import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import "bootstrap/dist/css/bootstrap.css";
import GameCard from "./components/GameCard";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
    <React.StrictMode>
        <App name="René Cruz" />
        <GameCard></GameCard>
    </React.StrictMode>
);
