const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Middleware para registrar todas las solicitudes
app.use((req, res, next) => {
 console.log(`${req.method} ${req.url}`);
 next(); // Pasa el control al siguiente middleware
});


// Ruta principal
app.get('/', (req, res) => {
 res.send('¡Hola, mundo con middleware!');
});
app.use('/api/producto',require('./punto1/routes/producto.route.js'));
app.use('/api/espectador',require('./punto3/routes/espectador.route.js'));
app.use('/api/transaccion',require('./punto2/routes/transaccion.route.js'));
app.use('/api/autores',require('./libro/routes/autores.route.js'));
app.use('/api/libros',require('./libro/routes/libro.route.js'));

// Iniciar el servidor
app.listen(port, () => {
 console.log(`Servidor escuchando en http://localhost:${port}`);
});
