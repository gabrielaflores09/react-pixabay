import React from 'react';
import { Container,TextField, Button, Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Header = () => {
    const classes = useStyles();

    return ( 
        <Container>
            <div className="formulario" >
                <p>Buscar de Imágenes</p>
                <Grid container spacing={1}>
                    <Grid container item sm={3}/>
                    <Grid item xs={12} sm={4}>
                        <TextField  fullWidth id="standard-basic" placeholder="Estrellas, paisajes, autos..."/>
                    </Grid >
                    
                    <Grid item xs={12} sm={2}>
                        <Button variant="contained" color="primary">Buscar</Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
     );
}
 
export default Header;