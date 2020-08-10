import React, { Component } from 'react';
import '../css/pieChart.css';



class PieChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secciones:[]
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
    componentDidMount(){
        console.log('MEMonte');
        this.apiCall("http://localhost:3000/api/productos/seccion", this.secciones)
    }
    secciones= (data) => {
        console.log(data);
        this.setState(
            {
                secciones: data.data.secciones

            }
        )
    }


    render() {
        return (
            <div>
                <div className='titulo'>
                    <h2>Cantidad de productos por seccion:</h2>
                    {
                                    this.state.secciones.map((category, i) => {
                                return(
                                <h3 key={'nameCat'+i} className="resaltar">
                                <h3 key={'nombre'+i} className="categoryName"> {category.nombre } </h3>
                                <h3 key={'productos'+i} className="categoryQuantity"> {category.productos.length} </h3>
                              </h3>)
                              })}
                     <h1 className='total'>Total de secciones: { this.state.secciones.length } </h1>
                </div>
            </div>
        );
    }
}

export default PieChart;