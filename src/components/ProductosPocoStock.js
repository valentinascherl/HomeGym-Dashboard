import React, { Component } from 'react'
import '../css/ProductosPocoStock.css';

class ProductosPocoStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: [],
            secciones: []
        }
    }
    apiCall(url, handler) {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                handler(data)
            })
            .catch(error => {
                console.log(error);
            })
    }
    componentDidMount() {
        this.apiCall("http://localhost:3000/api/productos", this.productos)
        this.apiCall("http://localhost:3000/api/productos/seccion", this.secciones)
    }
    secciones = (data) => {
        this.setState(
            {
                secciones: data.data.secciones

            }
        )
    }

    productos = (data) => {
        console.log(data);
        this.setState(
            {
                productos: data.data.productos

            }
        )
    }
    render() {
        return (


            <div class="row container-prod-poco-stock" style={{ padding: 0 }}>

                <div class="titulo-prod-poco-stock col-12">
                    <h2> PRODUCTOS CON STOCK MENOR A 20 </h2>
                </div>

                <div class="listado-prod-poco-stock col-12" style={{ padding: 0 }}>
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
}
export default ProductosPocoStock