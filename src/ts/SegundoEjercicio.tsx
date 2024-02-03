import React from 'react'

export const SegundoEjercicio = () => {
    const nums: number [] = [1, 2, 3, 4, 5];

    const arreglo =(numeros:number[]) =>{

        return numeros.reduce((total, num) => total + num, 0);
    }

    const suma: number =arreglo(nums);
  return (
    <div>
        <h2>Arreglo</h2>
        <p>La suma es: {suma}</p>

    </div>
  )
}
