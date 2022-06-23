import React from 'react';
import { Link } from 'react-router-dom';
const Footer = (props) => {
    return ( 
       <footer className='container py-5'>
        <div className='row'>
            <div className='col-md-6'>
                <nav className='nav footer justify-content-center'>
                    <Link className='nav-link' to={"nosotros"}>Nosotros</Link>
                    <Link className='nav-link' to={"viajes"}>viajes</Link>
                    <Link className='nav-link' to={"testimoniales"}>testimoniales</Link>
                </nav>
            </div>
            <div className='col'>
                <p className='copyright text-center text-md-right'>
                    Todos los derechos reservados {props.year} &copy;
                </p>
            </div>
        </div>
       </footer>
     );
}
 
export default Footer;