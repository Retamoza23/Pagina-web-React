import React from 'react';

const Seccion = ({ titulo, contenido }) => {
  return (
    <section>
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </section>
  );
};

export default Seccion;

