import React,{Fragment, useState, useEffect} from 'react';
import {ButtonGroup,Button, Container} from '@material-ui/core';
import {FirstPage,LastPage} from '@material-ui/icons';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';

function App() {
  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [valida, guardarValida] = useState(false);
  const [pagActual, guardarPagActual] = useState(1);
  const [totalPag, guardarTotalPag] = useState(1);

  const consultarAPI = async ()=>{

    if(busqueda === ''){
      return;
    }

    const imagenesPorPagina =32;
    const key='17217969-2979acf1d5fd3bedb4bfd1605';
    const url=`https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

    const resp = await fetch(url);
    const resp_api = await resp.json();

    guardarImagenes(resp_api.hits);
    guardarValida(true);

    // calcular total paginas
    const calcTotalPag = Math.ceil(resp_api.totalHits/imagenesPorPagina);
    guardarTotalPag(calcTotalPag);


    console.log(resp_api);

  }
  // Defino pagina anterior
  const pagAnterior = () =>{

    const nuevaPagActual = pagActual -1;

    if(nuevaPagActual === 0){
      return;
    }else{
      guardarPagActual(nuevaPagActual)
    }
  }

  const pagSiguiente = () =>{
    const nuevaPagActual = pagActual+1;

    if(nuevaPagActual > totalPag){
      return;
    }else{
      guardarPagActual(nuevaPagActual)
    }
  }

  useEffect(()=>{   
    consultarAPI();
  },[busqueda])
  return (
    <Fragment>
      <Header
        guardarBusqueda={guardarBusqueda}
      />
      {valida? 
      <Fragment>
        <Body
          busqueda={busqueda}
          imagenes={imagenes}
        />
        <br/>
        <div className="botonGroup">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button
              onClick={pagAnterior}
            >
              <FirstPage size="small"/>
              Anterior
            </Button>
            <Button
              onClick={pagSiguiente}
            >
              Siguiente
              <LastPage  size="small"/>
            </Button>
          </ButtonGroup> 
        </div>
      </Fragment>
      :
      null}
      
    </Fragment>
  );
}

export default App;
