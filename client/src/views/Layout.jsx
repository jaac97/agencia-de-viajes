import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {UseYear} from '../scripts/fetch';


const Layout = () => {
 
    const location = useLocation().pathname.slice(1) || 'Nosotros';

    return ( 
        <>  
            <Header />
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className="text-center">{location}</h1>
                    <Outlet />
                </div>
            </div>
            <div className='row'>
                <Footer year={UseYear()} />
            </div>
        </>
     );
}
 
export default Layout;