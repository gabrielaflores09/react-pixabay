import React,{useState} from 'react';
import { Container,TextField, Button, Grid, Divider} from "@material-ui/core";
import Error from './Error';

const Header = ({guardarBusqueda}) => {

    const [termino, guardarTermino] = useState('');
    const [error, guardarError] = useState(false);

    const buscarImagenes = e =>{
        e.preventDefault();

        // Validar
        if(termino.trim()===''){
            guardarError(true);
            return;
        }
        guardarError(false);

        // Enviar a componente ppal
        guardarBusqueda(termino);
    }

    return ( 
        <Container>
            <div className="formulario" >
                <p>Buscador de Imágenes</p>
                <form onSubmit={buscarImagenes}>
                    <Grid container spacing={1}>
                        <Grid container item sm={3}/>
                        <Grid item xs={12} sm={4}>
                            <TextField  
                                fullWidth id="standard-basic" 
                                placeholder="Estrellas, paisajes, autos..."
                                onChange={ e=> guardarTermino(e.target.value)}
                            />
                        </Grid >
                        
                        <Grid item xs={12} sm={2}>
                            <Button variant="contained" color="primary" type="Submit">Buscar</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
            {error ? <Error mensaje="Agregue un término de búsqueda"/> : null }
            <Divider />
        </Container>
     );
}
 
export default Header;