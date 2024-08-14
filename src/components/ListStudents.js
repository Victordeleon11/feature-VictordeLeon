import React, { useState, useEffect } from 'react';

const ListStudents = () => {
  const [grado, setGrado] = useState('');
  const [students, setStudents] = useState([]);

  const handleFetchStudents = async () => {
    if (!grado) return;
    try {
      const response = await fetch(`http://localhost:3000/consultar-alumno/${grado}`);
      if (!response.ok) throw new Error('Error al consultar alumnos');
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (grado) handleFetchStudents();
  }, [grado]);

  // Estilos en línea
  const containerStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginTop: '20px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: 'translateY(0)',
  };

  const hoverContainerStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    fontFamily: "'Montserrat', sans-serif",
  };

  const titleTextStyle = {
    fontSize: '2rem',
    color: '#333',
    fontWeight: '500',
    marginBottom: '10px',
    fontFamily: "'Montserrat', sans-serif",
  };

  const formContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '20px',
  };

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyle = {
    fontSize: '14px',
    color: '#333',
    marginBottom: '5px',
    fontFamily: "'Montserrat', sans-serif",
  };

  const inputStyle = {
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    fontFamily: "'Montserrat', sans-serif",
  };

  const inputFocusStyle = {
    borderColor: '#007bff',
    boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)',
    outline: 'none',
  };

  const buttonStyle = {
    padding: '12px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    width: '100%',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    fontFamily: "'Montserrat', sans-serif",
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)',
  };

  const buttonActiveStyle = {
    backgroundColor: '#004494',
    transform: 'scale(0.95)',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  };

  const listItemStyle = {
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    color: '#555',
    border: '1px solid #ddd',
  };

  const lastItemStyle = {
    marginBottom: '0',
  };

  return (
    <div
      style={containerStyle}
      className="list-students-container"
      onMouseOver={(e) => Object.assign(e.currentTarget.style, hoverContainerStyle)}
      onMouseOut={(e) => Object.assign(e.currentTarget.style, containerStyle)}
    >
      <div style={titleStyle} className="form-title">
        <h2 style={titleTextStyle}>Consultar Alumnos</h2>
      </div>
      <div style={formContentStyle} className="form-content">
        <div style={inputGroupStyle} className="input-group">
          <label htmlFor="grado" style={labelStyle}>Grado:</label>
          <input
            id="grado"
            type="number"
            value={grado}
            onChange={(e) => setGrado(e.target.value)}
            placeholder="Grado"
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />
        </div>
        <button
          onClick={handleFetchStudents}
          style={buttonStyle}
          onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
          onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
          onMouseDown={(e) => Object.assign(e.target.style, buttonActiveStyle)}
          onMouseUp={(e) => Object.assign(e.target.style, buttonHoverStyle)}
        >
          Buscar
        </button>
      </div>
      <ul style={listStyle} className="students-list">
        {students.map((student) => (
          <li
            key={student.id}
            style={
              student.id === students[students.length - 1].id
                ? { ...listItemStyle, ...lastItemStyle }
                : listItemStyle
            }
            className="student-item"
          >
            <div>
              <strong>Nombre:</strong> {student.nombre}
            </div>
            <div>
              <strong>Fecha de Nacimiento:</strong> {student.fecha_nacimiento}
            </div>
            <div>
              <strong>Nombre del Padre:</strong> {student.nombre_padre}
            </div>
            <div>
              <strong>Nombre de la Madre:</strong> {student.nombre_madre}
            </div>
            <div>
              <strong>Grado:</strong> {student.grado}
            </div>
            <div>
              <strong>Sección:</strong> {student.seccion}
            </div>
            <div>
              <strong>Fecha de Ingreso:</strong> {student.fecha_ingreso}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListStudents;
