import React,{useState} from 'react';
import { Container,TextField, Button, Grid, Divider} from "@material-ui/core";

const Header = ({guardarBusqueda}) => {

    const [termino, guardarTermino] = useState('');

    const buscarImagenes = e =>{
        e.preventDefault();

        // Enviar a componente ppal
        guardarBusqueda(termino);
    }

    return ( 
        <Container>
            <div className="formulario" >
                <p>Busca tus imágenes en Pixabay</p>
                <form onSubmit={buscarImagenes}>
                    <Grid container spacing={1}>
                        <Grid container item sm={3}/>
                        <Grid item xs={12} sm={4}>
                            <TextField  
                                fullWidth id="standard-basic" 
                                placeholder="Estrellas, paisajes, autos..."
                                onChange={ e=> guardarTermino(e.target.value)}
                                required
                            />
                        </Grid >
                        
                        <Grid item xs={12} sm={2}>
                            <Button variant="contained" color="primary" type="Submit">Buscar</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Divider />
        </Container>
     );
}
 
export default Header;