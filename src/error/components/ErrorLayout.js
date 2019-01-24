import React from 'react'
import './ErrorLayout.css'

function ErrorLayout(){
    return(
        <div className='errorMessageContainer'>
            <h2 className="errorTitle">Lo sentimos, ha ocurrdo un error :(</h2>
            <h5 className="errorDescription">Favor de consultar a soporte técnico</h5>
            <button className="waves-effect waves-light btn-large">Preguntas Frecuentes</button>
        </div>
    )
}

export default ErrorLayout