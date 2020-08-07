import React from 'react'
import '../css/ProductosPocoStock.css';

function ProductosPocoStock() {
    return (


        <div class="row container-prod-poco-stock" style={{padding: 0}}>

            <div class="titulo-prod-poco-stock col-12">
                <h2> PRODUCTOS CON STOCK MENOR A 20 </h2>
            </div>

            <div class="listado-prod-poco-stock col-12" style={{padding: 0}}>
                 <ul style={{padding: 5}}>
                     <li> <strong>Bicicleta Fija</strong> <h4>6</h4>  </li>
                     <li><strong> Mancuernas</strong>  <h4>6</h4></li>
                     <li> <strong>Barra</strong>   <h4>6</h4></li>
                     <li><strong> Guantes</strong>  <h4>6</h4></li>
                 </ul>

             </div>


        </div>


        )
    }
    
    export default ProductosPocoStock