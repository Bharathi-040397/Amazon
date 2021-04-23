import React from 'react';
import './SimpleFooter.css';

function SimpleFooter() {
    return (
        <footer className="simple">
            <div className="footer_content">
            <span className="one">Conditions of Use</span>
            <span className="one">Privacy Notice</span>
            <span className="one">Help</span>
            </div>
            <p> &copy; 1996-2020 , <strong>Amazon.com</strong>, Inc. or its affiliates</p>
            
        </footer>
    )
}

export default SimpleFooter
