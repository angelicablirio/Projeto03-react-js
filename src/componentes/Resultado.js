import React from 'react'

export default function Resultado(props){
    return(
        <div>
          <p className='resultado'>O seu IMC é de: {props.r.toFixed(2)}</p>
        </div>
      )
}