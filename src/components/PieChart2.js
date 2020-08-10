import React from "react";
import '../css/pieChart2.css';

function PieChart2() {
    return (
        <div>
            <div class="titulo">
                <h2>Ventas por secciones</h2>
            </div>
            <div>
                             <h3 className="resaltar">
                                <h3 className="categoryName">  </h3>
                                <h3  className="categoryQuantity">  </h3>
                              </h3>
            </div>
            <div className="sec">
                <ul className="todos">
                    <li className="muscu">Musculacion</li>
                    <li className="cardio">Cardio</li>
                    <li className="acce">Accesorios</li>
                </ul>
                <h1 className='totalVentas'>Total de ventas: </h1>
            </div>
        </div>
    );
}

export default PieChart2;