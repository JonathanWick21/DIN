import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function Interprete(props) {
  const {foto, nombre} = props;
  return (
    <>
      <div>
        <img src={foto} alt={nombre}/>
        <div>
          <h2>{nombre}</h2>
          <p>{props.children}</p>
        </div>
      </div>
    </>
  )
}

export default Interprete
