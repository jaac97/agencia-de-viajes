import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return ( 
       <header>
            <div className='navegacion'>
                <div className='container'>
                    <div className='row justify-content-center justify-content-md-between align-items-center py-4'>
                        <div className='col-md-4 col-6'>
                            <Link to={"/"}>
                                <img src='img/logo.svg' alt='Logo empresa' />
                            </Link>
                        </div>
                        <div className='col-md-8'>
                            <nav className='mt-5 mt-md-0 nav justify-content-center justify-content-md-end'>
                                <Link className='nav-link' to={"nosotros"}>Nosotros</Link>
                                <Link className='nav-link' to={"viajes"}>viajes</Link>
                                <Link className='nav-link' to={"testimoniales"}>testimoniales</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
       </header>
     );
}
 
export default Header;