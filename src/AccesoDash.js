import React from "react";
import './styles/dashboard.css';

export default function AccesoDashboard(){
    return(
        <iframe 
        width="1120" 
        height="670" 
        className="dash-analytics"
        src="https://lookerstudio.google.com/embed/reporting/48ebec44-a9eb-4c99-afe6-03f77417e0aa/page/kIV1C" 
        title="Total de usuarios"
        frameBorder="0" // Cambiamos frameborder por frameBorder 
        style={{ border: 0 }} // Corrección del estilo
        allowfullscreen 
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox">
      </iframe>
    )
}