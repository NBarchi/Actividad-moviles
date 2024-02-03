import React from 'react'

export const TercerEjercicio = () => {

    const arreglo = [5,10,15,20,25,30,35,40,45,50];
    
    const divididos  = arreglo.map(x => x / 5);
  return (
    <div>
        <h2>Valores divididos para 5</h2>
        <p>El nuevo arreglo es: {divididos.join(', ')}</p>
    </div>
  )
}
