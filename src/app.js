const express = require('express');
const productRouter = require('./controllers/product.controller.js')

const app = express();

app.use(express.json()); // Para leer JSON en requests

app.get('/', (req, res) => {
  res.send('Servidor Express funcionando 🚀');
});

app.use('/products', productRouter)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});