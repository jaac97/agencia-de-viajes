import React from 'react';

const Nosotros = (props) => {
    return ( 
        <div className='container'>
            <h2>Imprimiendo {!props.value ? 'Cargando' : props.value}  si funciona</h2>
        </div>
     );
}
 
export default Nosotros;