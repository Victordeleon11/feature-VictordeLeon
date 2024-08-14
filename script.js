document.getElementById('createForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    const nombrePadre = document.getElementById('nombre_padre').value;
    const nombreMadre = document.getElementById('nombre_madre').value;
    const grado = parseInt(document.getElementById('grado').value, 10);
    const seccion = document.getElementById('seccion').value;
    const fechaIngreso = document.getElementById('fecha_ingreso').value;

    fetch('http://localhost:3001/crear-alumno', { // Cambiar el puerto a 3001
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre,
            fecha_nacimiento: fechaNacimiento,
            nombre_padre: nombrePadre,
            nombre_madre: nombreMadre,
            grado,
            seccion,
            fecha_ingreso: fechaIngreso
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Alumno creado:', data);
        alert('Alumno creado con éxito');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al crear el alumno');
    });
});

document.getElementById('consultForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const grado = parseInt(document.getElementById('consultGrado').value, 10);

    fetch(`http://localhost:3001/consultar-alumno/${grado}`, { // Cambiar el puerto a 3001
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('results').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('results').textContent = 'Error al consultar los alumnos';
    });
});
