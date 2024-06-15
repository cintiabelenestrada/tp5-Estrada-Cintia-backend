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
app.use('/api/producto',require('./routes/producto.route.js'));
app.use('/api/espectador',require('./routes/espectador.route.js'));


// Iniciar el servidor
app.listen(port, () => {
 console.log(`Servidor escuchando en http://localhost:${port}`);
});
