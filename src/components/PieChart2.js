import React from "react";
import '../css/pieChart2.css';

function PieChart2() {
    return (
        <div>
            <div class="titulo">
                <h1>Ventas por secciones</h1>
            </div>
            <div class="grafico">
                <div class="sombra"></div>
                <div id="porcion1" class="recorte"><div class="quesito" data-rel=""></div></div>
                <div id="porcion2" class="recorte"><div class="quesito" data-rel=""></div></div>
                <div id="porcion3" class="recorte"><div class="quesito" data-rel=""></div></div>
                <div id="porcionFin" class="recorte"><div class="quesito" data-rel=""></div></div>
            </div>
            <div>
                <ul class="todos">
                    <li class="muscu">Musculacion</li>
                    <li class="cardio">Cardio</li>
                    <li class="acce">Accesorios</li>
                    <li class="paquetes">Paquetes</li>
                </ul>
            </div>
        </div>
    );
}

export default PieChart2;