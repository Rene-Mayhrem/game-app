import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

interface Props {
    name: string;
}

const containerGame = ({ name }: Props) => {
    ReactDOM.createRoot(
        document.getElementById("containerGame") as HTMLElement
    ).render(<React.StrictMode></React.StrictMode>);
};
