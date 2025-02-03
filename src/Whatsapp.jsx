import React from "react";
import './Alli.css';

function Whatsapp(){
    return(
        <div className="WhatsappDiv">
            <a
                href="https://wa.me/5511967979650" 
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
            >
                <i className="mdi mdi-whatsapp iconWhats"></i>
            </a>
        </div>
    )
}

export default Whatsapp;