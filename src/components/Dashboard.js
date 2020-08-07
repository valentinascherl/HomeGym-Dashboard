import React from "react";
import '../css/dashboard.css';

function Dashboard() {
    return (
        <div className="contenedor">
            <div className="tituloppal">
                <h1>Dashboard</h1>
            </div>
            <div className="agregar">
                <h2>Agregar producto</h2>
            </div>
            <div className="editar">
                <h2>Editar producto</h2>
            </div>
        </div>
    );
}

export default Dashboard;