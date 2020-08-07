import React from 'react'
import '../css/header.css';

function Header() {
    return (
        <div className='grande'>
            <div class="contenedor-logo">

                <img class="img-fluid img-logo" src="/images/HOME GYM (3).png" alt="Home Gym Logo" />
            </div>

                <nav class="navbar navbar-expand-lg color-rojo">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">
                            <svg class="bi bi-list menu-hamburguesa" width="1em" height="1em" viewBox="0 0 16 16"
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </span>
                    </button>


                    <div class="collapse navbar-collapse menu-principal" id="navbarNavDropdown">
                        <ul class="navbar-nav lista-menu">
                            <li class="nav-item active">
                                <a class="nav-link color-texto-nav" href="/">Inicio <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle color-texto-nav" href="#" id="navbarDropdownMenuLink"
                                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Productos
                    </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="/productos/cardio">Cardio</a>
                                    <a class="dropdown-item" href="/productos/musculacion">Musculación</a>
                                    <a class="dropdown-item" href="/productos/accesiorios">Accesorios</a>
                                    <a class="dropdown-item" href="/productos/paquetes">Paquetes</a>

                                </div>



                                <li class="nav-item">
                                    <a class="nav-link color-texto-nav" href="/contacto">Contacto</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link color-texto-nav" href="/carrito"><i class="fas fa-shopping-cart"></i> Mi compra</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link color-texto-nav" href="/users/login"><i class="fas fa-user"></i>  Loguearse</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link color-texto-nav" href="/users/registro">Registrarse</a>
                                </li>

                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
    )
}

export default Header;