import React from 'react';


const Nosotros = (props) => {
    return ( 
    <>  
        <main className='container mt-5'>
            <div className='row'>
                <div className='col-md-5'>
                    <img className='img-fluid' src='../img/nosotros.jpg'  alt='nosotros'/>
                </div>
                <div className='col-md-7'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sem tellus, efficitur nec porta id, tempus sed nisl. In egestas, felis sed tincidunt egestas, est tortor convallis dolor, vel luctus diam leo sit amet ipsum. Cras vel justo velit. Vestibulum lobortis volutpat sapien vestibulum fringilla. Morbi turpis erat, imperdiet eget suscipit ut, tincidunt vel ipsum. Duis consequat imperdiet lorem, quis viverra libero hendrerit in. Aliquam et viverra ex, vel tincidunt justo. Proin aliquet nisi nibh, ut blandit purus sollicitudin id. Aenean facilisis non lorem vitae rhoncus. 
                    </p>
                    <p>
                    Morbi at viverra orci, at semper velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum magna enim, finibus at dui sollicitudin, malesuada placerat massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque egestas venenatis. Duis eu magna hendrerit, lacinia felis ut, porta felis. Duis molestie non libero id finibus. Nunc interdum sagittis lacus porttitor ultrices. Maecenas vitae lectus malesuada, convallis est non, vehicula ex. Cras rutrum ligula quis fermentum 
                    </p>
                    <p>
                    Maecenas quam mi, ullamcorper commodo pellentesque non, tempus nec metus. Proin quis aliquet eros. Donec congue, quam eu pellentesque dictum, justo dui tristique nisl, ut vehicula justo risus sit amet dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin tempor fringilla velit, accumsan vestibulum est mattis lobortis. Cras vitae augue id magna elementum vestibulum. Nulla facilisi. In hac habitasse platea dictumst. Aenean et felis a sapien sagittis molestie. Vivamus ut mi eu velit eleifend semper ac laoreet lorem. 
                    </p>
                </div>
            </div>
            <div className='listado-iconos'>
                <div className='container mt-5 py-5 text-center'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src='img/icono_seguridad.svg' className='img-fluid mb-4' alt='icono seguridad'/>
                            <h2 className='mb-4'>
                                    Seguridad
                            </h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sem tellus, efficitur nec porta id, tempus sed nisl. In egestas, felis sed tincidunt egestas, est tortor convallis dolor, vel luctus diam leo sit amet.
                            </p>
                        </div>
                        <div className='col-md-4'>
                            <img src='img/icono_precios.svg' className='img-fluid mb-4' alt='icono precios'/>
                            <h2 className='mb-4'>
                                    Destinos
                            </h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sem tellus, efficitur nec porta id, tempus sed nisl. In egestas, felis sed tincidunt egestas, est tortor convallis dolor, vel luctus diam leo sit amet.
                            </p>
                        </div>
                        <div className='col-md-4'>
                            <img src='img/icono_destinos.svg' className='img-fluid mb-4' alt='icono destinos'/>
                            <h2 className='mb-4'>
                                    Precios
                            </h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sem tellus, efficitur nec porta id, tempus sed nisl. In egestas, felis sed tincidunt egestas, est tortor convallis dolor, vel luctus diam leo sit amet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
     );
}
 
export default Nosotros;