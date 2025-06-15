const express = require('express');
const router = express.Router();
const conexao = require('../db');

// GET /api/tipos
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM tipo_entidade ORDER BY descricao';

  conexao.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao buscar tipos:', err);
      return res.status(500).json({ message: 'Erro ao carregar tipos de entidade.' });
    }

    res.json(results);
  });
});

module.exports = router;
