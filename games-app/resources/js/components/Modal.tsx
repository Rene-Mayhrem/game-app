import React from "react";
import { ReactNode } from "react";

interface Props {
    title: string;
    content: ReactNode;
    onClose: () => void;
}

const Modal = ({ title, content, onClose }: Props) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times
                </span>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Modal;
