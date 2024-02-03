import React, { useState } from 'react'

export const Contador = () => {
  const [valor, setValor] = useState(5);

  const contador=(num : number)=>{
    setValor(valor+num);
  }

  const contadorResta = (num : number)=>{
    setValor(valor-num);
  }

  return{
      valor,
      contador,
      contadorResta
  }
}
