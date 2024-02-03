import React, { useState } from 'react'

export const QuintoEjercicio = () => {

  const [valor, setValor] = useState (0);

  const contador=(num : number)=>{
    setValor(valor+num);
  }

  const contadorResta = (num : number)=>{
    setValor(valor-num);
  }

  return (
    <div>
        <h3>Contador: <small>{valor}</small></h3>
        <button className="btn btn-primary" onClick= {()=>contador(5)}>+5</button>
        &nbsp;
        <button className="btn btn-primary" onClick= {()=>contadorResta(5)}>-5</button>
    </div>
  )

}
