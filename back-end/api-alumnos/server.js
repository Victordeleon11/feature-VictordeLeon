const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Middleware para permitir CORS
app.use(cors());
app.use(express.json());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234', // Reemplaza con tu contraseña real
  database: 'bd' // Nombre de tu base de datos
});

// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Ruta para crear un nuevo alumno
app.post('/crear-alumno', (req, res) => {
  const { nombre, fecha_nacimiento, nombre_padre, nombre_madre, grado, seccion, fecha_ingreso } = req.body;
  const sql = 'INSERT INTO alumnos (nombre, fecha_nacimiento, nombre_padre, nombre_madre, grado, seccion, fecha_ingreso) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [nombre, fecha_nacimiento, nombre_padre, nombre_madre, grado, seccion, fecha_ingreso], (err) => {
    if (err) {
      res.status(500).send('Error al crear alumno');
      return;
    }
    res.status(200).send('Alumno creado con éxito');
  });
});

// Ruta para consultar alumnos por grado
app.get('/consultar-alumno/:grado', (req, res) => {
  const grado = req.params.grado;
  if (isNaN(grado)) {
    res.status(400).json({ error: 'El ID del grado debe ser un número' });
    return;
  }
  const sql = 'SELECT * FROM alumnos WHERE grado = ?';
  db.query(sql, [grado], (err, results) => {
    if (err) {
      res.status(500).send('Error al consultar alumnos');
      return;
    }
    res.json(results);
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
