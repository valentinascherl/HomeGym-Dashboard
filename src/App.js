import React from 'react';
//import logo from './logo.svg';
import PieChart from './components/PieChart';
import PieChart2 from './components/PieChart2';
import './App.css';
import Dashboard from './components/Dashboard';
import ProductosPocoStock from './components/ProductosPocoStock';
import Usuarios from './components/Usuarios';
import Evolucion from './components/Evolucion';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
      </head>
      <div className="primer">
        <div className="dashboard col-lg-4">
          <Dashboard />
        </div>
        <div className="pieChart1 col-lg-4">
          <PieChart />
        </div>
        <div className="pieChart2 col-lg-4">
          <PieChart2 />
        </div>
      </div>
      <div className="segundo">
        <div className="col-lg-6">
          <ProductosPocoStock />
        </div>
        <div className=" usuarios col-lg-6">
          <Usuarios />
        </div>
      </div>
      <div className="tercer">
        <Evolucion />
      </div>
      </div>
      <script src="https://kit.fontawesome.com/2677179161.js" crossorigin="anonymous"></script>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </div>

  );
}

export default App;
