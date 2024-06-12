const express = require('express');
const app = express();
const port = 3000;


// Middleware para registrar todas las solicitudes
app.use((req, res, next) => {
 console.log(`${req.method} ${req.url}`);
 next(); // Pasa el control al siguiente middleware
});


// Ruta principal
app.get('/', (req, res) => {
 res.send('¡Hola, mundo con middleware!');
});


// Iniciar el servidor
app.listen(port, () => {
 console.log(`Servidor escuchando en http://localhost:${port}`);
});
