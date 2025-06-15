const express = require('express');
const router = express.Router();
const conexao = require('../db');

// POST /api/login
router.post('/', (req, res) => {
  const { login, senha } = req.body;

  if (!login || !senha) {
    return res.status(400).json({ message: 'Login e senha são obrigatórios.' });
  }

  const sql = `SELECT u.id_entidade, u.login, e.nome 
               FROM usuarios u 
               INNER JOIN entidades e ON e.id_entidade = u.id_entidade 
               WHERE u.login = ? AND u.senha = ?`;

  conexao.query(sql, [login, senha], (err, results) => {
    if (err) {
      console.error('Erro na consulta de login:', err);
      return res.status(500).json({ message: 'Erro interno ao realizar login.' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Usuário ou senha inválidos.' });
    }

    // Retorna nome e id_entidade para uso futuro
    res.status(200).json({
      message: 'Login válido.',
      id_entidade: results[0].id_entidade,
      nome: results[0].nome
    });
  });
});

module.exports = router;
