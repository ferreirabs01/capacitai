require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const entidadeRoutes = require('./routes/entidade');
const tipoEntidadeRoutes = require('./routes/tipo_entidade');



dotenv.config();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));


app.use('/api/entidades', entidadeRoutes);
app.use('/api/tipos', tipoEntidadeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
