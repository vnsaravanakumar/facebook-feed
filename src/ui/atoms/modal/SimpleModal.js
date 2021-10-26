import React, { useEffect, useRef } from 'react';
import ReactDom from "react-dom";
// import Button from '../button/Button';
// import CloseIcon from '../CloseIcon';
import './SimpleModal.scss';

const SimpleModal = ({ children, isOpen, ...props }) => {
    if(!isOpen) return null;

    return ReactDom.createPortal(
        <>
            <div className="hdm-modal" {...props}>
                {children}
            </div>
        </>, document.body
    );
};

export default SimpleModal;