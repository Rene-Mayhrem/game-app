import React from "react";
import { ReactNode } from "react";

//? Interface props
interface Props {
    id: string;
    children: string; //? text button content
    color?: "secondary" | "primary" | "success" | "danger" | "warning"; //? permitted bootstrap type of buttons
    onclick: () => void; //? event
}
//? Use props variables -> color primary by default
const Button = ({ id, children, color = "primary", onclick }: Props) => {
    return (
        <div>
            <button
                id={id}
                type="button"
                className={"btn btn-" + color}
                onClick={onclick}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
