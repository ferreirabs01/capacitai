const express = require('express');
const router = express.Router();
const conexao = require('../db');

// GET /api/vagas → Lista todas as vagas
router.get('/', (req, res) => {
  const sql = `
    SELECT id_vaga, descricao, competencias
    FROM vagas_perfil
    ORDER BY descricao
  `;

  conexao.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao buscar vagas:', err);
      return res.status(500).json({ message: 'Erro interno ao buscar vagas.' });
    }

    res.json(results);
  });
});

module.exports = router;
