require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const entidadeRoutes = require('./routes/entidade');
const tipoEntidadeRoutes = require('./routes/tipo_entidade');
const loginRoutes = require('./routes/login');
const perfilRoutes = require('./routes/perfil');
const vagasRoutes = require('./routes/vagas');
const cursosRoutes = require('./routes/cursos');








dotenv.config();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));
app.use('/img', express.static(path.join(__dirname, '../frontend/img')));



app.use('/api/entidades', entidadeRoutes);
app.use('/api/tipos', tipoEntidadeRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/perfil', perfilRoutes);
app.use('/api/vagas', vagasRoutes);
app.use('/api/cursos', cursosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
