import React from 'react';
import {Alert} from '@material-ui/lab';

const Error = ({mensaje}) => {
    return ( 
        <div className="error">
            <Alert severity="error">
               <strong>ERROR - </strong> {mensaje}
            </Alert>
        </div>
     );
}
 
export default Error;