import React from 'react'

export default function Peso(props){
    return(
        <div className='form'>
          <label>
            Digite o seu peso: 
            <input type="text" value={props.p} onChange={(e)=>{props.sp(e.target.value)}}/>
          </label>
        </div>
      )
}