import React from 'react'

export default function Altura(props){
    return(
        <div className='form'>
          <label>
            Digite a sua altura: 
            <input type="text" value={props.a} onChange={(e)=>{props.sa(e.target.value)}}/>
          </label>
        </div>
      )
}