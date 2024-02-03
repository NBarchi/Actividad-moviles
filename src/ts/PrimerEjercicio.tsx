import React from 'react'

export const PrimerEjercicio = () => {
    const area = (lado:number)=>{
        return lado*lado
    }
  return (
    <div>
        <h2>Area de un Cuadrado</h2>
        <p>El area del cuadradeo es: {area(4)}</p>
    </div>
    
  )
}
