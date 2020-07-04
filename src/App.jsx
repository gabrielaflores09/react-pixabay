import React,{Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';

function App() {
  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [valida, guardarValida] = useState(false);

  useEffect(()=>{

    const consultarAPI = async ()=>{

      if(busqueda === ''){
        return;
      }
  
      const imagenesPorPagina =30;
      const key='17217969-2979acf1d5fd3bedb4bfd1605';
      const url=`https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const resp = await fetch(url);
      const resp_api = await resp.json();

      guardarImagenes(resp_api.hits);
      guardarValida(true);
  
    } 
    
    consultarAPI();
    
  })
  return (
    <Fragment>
      <Header
        guardarBusqueda={guardarBusqueda}
      />
      {valida? <Body
        busqueda={busqueda}
        imagenes={imagenes}
      />:
      null}
      
    </Fragment>
  );
}

export default App;
