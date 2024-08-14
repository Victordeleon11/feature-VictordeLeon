import React, { useState } from 'react';
import './CreateStudent.css'; // Asegúrate de crear este archivo CSS para estilos específicos del componente

const CreateStudent = () => {
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [nombrePadre, setNombrePadre] = useState('');
  const [nombreMadre, setNombreMadre] = useState('');
  const [grado, setGrado] = useState('');
  const [seccion, setSeccion] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/crear-alumno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre,
          fecha_nacimiento: fechaNacimiento,
          nombre_padre: nombrePadre,
          nombre_madre: nombreMadre,
          grado,
          seccion,
          fecha_ingreso: fechaIngreso,
        }),
      });
      if (!response.ok) throw new Error('Error al crear el alumno');
      alert('Alumno creado con éxito');
    } catch (error) {
      alert(error.message);
    }
  };

  const titleTextStyle = {
    fontSize: '2rem',
    color: '#333',
    fontWeight: '500',
    marginBottom: '10px',
    fontFamily: "'Montserrat', sans-serif",
    textAlign: 'center',
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-title">
          <h2 style={titleTextStyle}>Agregar Alumno</h2>
        </div>
        <div className="form-content">
          <div className="input-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
            <input
              id="fechaNacimiento"
              type="date"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="nombrePadre">Nombre del Padre</label>
            <input
              id="nombrePadre"
              type="text"
              value={nombrePadre}
              onChange={(e) => setNombrePadre(e.target.value)}
              placeholder="Nombre del padre"
            />
          </div>
          <div className="input-group">
            <label htmlFor="nombreMadre">Nombre de la Madre</label>
            <input
              id="nombreMadre"
              type="text"
              value={nombreMadre}
              onChange={(e) => setNombreMadre(e.target.value)}
              placeholder="Nombre de la madre"
            />
          </div>
          <div className="input-group">
            <label htmlFor="grado">Grado</label>
            <input
              id="grado"
              type="number"
              value={grado}
              onChange={(e) => setGrado(e.target.value)}
              placeholder="Grado"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="seccion">Sección</label>
            <input
              id="seccion"
              type="text"
              value={seccion}
              onChange={(e) => setSeccion(e.target.value)}
              placeholder="Sección"
            />
          </div>
          <div className="input-group">
            <label htmlFor="fechaIngreso">Fecha de Ingreso</label>
            <input
              id="fechaIngreso"
              type="date"
              value={fechaIngreso}
              onChange={(e) => setFechaIngreso(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit">Crear Alumno</button>
      </form>
    </div>
  );
};

export default CreateStudent;
