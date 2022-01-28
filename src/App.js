import React,{useState} from 'react'
import TabelaImc from './componentes/TabelaImc'
import Peso from './componentes/Peso'
import Altura from './componentes/Altura'
import CalcularImc from './componentes/CalcularImc'
import Resultado from './componentes/Resultado'
import './App.css'


export default function App(){

  const[peso, setPeso]=useState(0)
  const[altura, setAltura]=useState(0)
  const[resultado, setResultado]=useState(0)

  return(
    <>
      <main>
        <h1>Calcule o seu IMC</h1>
        <div className='conteudo'>
          <Peso p={peso} sp={setPeso}/>
          <Altura a={altura} sa={setAltura}/>
          <CalcularImc p={peso} a={altura} sr={setResultado}/>
          <Resultado r={resultado}/>
          <TabelaImc/>
        </div>
      </main>
    </>
  )
}