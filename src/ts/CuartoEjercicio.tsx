import React from 'react'

export const CuartoEjercicio = () => {
    interface Alumnos {
      name: string;
      edad: number;
      calificacion: number;
    }

    const alumno: Alumnos [] = [{
        name: 'Viviana',
        edad: 19,
        calificacion: 10
      },
      {
        name: 'Wendy',
        edad: 20,
        calificacion: 8
      },
      {
        name: 'Gerson',
        edad: 18,
        calificacion: 9
      }
  ];

  const promedio = () =>{   

      let suma=0;

      for (let i = 0; i < alumno.length; i++) {
        suma += alumno[i].calificacion;
      }

      const promedio = suma / alumno.length;

      return promedio;

  };

  return (
    <div>
      <h2>Promedio</h2>
      <p>El promedio de todas las calificaciones es: {promedio()}</p>
    </div>
  )

}
