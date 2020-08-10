import React, { Component } from 'react'
import '../css/usuarios.css';

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalUsuarios: "",
            totalProductos:""
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
    totalProductos = (data) => {
        this.setState(
        {
            totalProductos: data.meta.item_count,
        })
    }
    totalUsuarios = (data) => {
        this.setState(
        {
            totalUsuarios: data.meta.item_count
        })
    }
    componentDidMount(){
        this.apiCall("http://localhost:3000/api/productos", this.totalProductos)
        this.apiCall("http://localhost:3000/api/usuarios", this.totalUsuarios)
    }


    render() {
        let contenido;
        if(this.state.totalProductos === "") {
            contenido = <p>Cargando datos..</p>
        } else {
            contenido = <p>{this.state.totalProductos}</p>
        }
        let contenidoUsuarios;
        if(this.state.totalUsuarios === "") {
            contenidoUsuarios = <p>Cargando datos..</p>
        } else {
            contenidoUsuarios = <p>{this.state.totalUsuarios}</p>
        }
        return (
            <div>
            <div class="row container-usuarios" style={{ padding: 0 }}>
                <h2 class="h2-usuarios" style={{ padding: 10 }}> Total Usuarios </h2>
                <h4 class="h4-cant-usuarios" style={{ padding: 5 }}> { contenidoUsuarios } </h4>
            </div>
            <div class="row container-productos" style={{ padding: 0 }}>
                <h2 class="h2-usuarios" style={{ padding: 10 }}>Total Productos </h2>
                <h4 class="h4-cant-productos" style={{ padding: 5 }}> { contenido } </h4>
            </div>
            </div>
        )
    }
}

    export default Usuarios;