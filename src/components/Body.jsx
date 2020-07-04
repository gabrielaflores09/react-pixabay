import React from 'react';
import {Grid, Container } from '@material-ui/core';
import Imagen from './Imagen';

const Body = ({imagenes, busqueda}) => {

    return ( 
        <Container>
                <div className="busqueda">
                    Resultados para "{busqueda}"
                </div>
                <Grid 
                    direction="row"
                    container
                    justify="center"
                    alignItems="center"
                    spacing={5}
                >
                    {imagenes && imagenes.map(imagen =>(
                        <Imagen
                            key={imagen.id}
                            image={imagen}
                        />
                    ))}
                </Grid>
           
        </Container>

     );
}
 
export default Body;