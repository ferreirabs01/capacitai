const express = require('express');
const router = express.Router();
const conexao = require('../db');

// POST /api/entidades/cadastrar
router.post('/cadastrar', (req, res) => {
      console.log('Body recebido:', req.body); // <<< adicione isso
  const { nome, tipo, razao_social, nrCadastro, email, telefone } = req.body;

  if (!nome || !tipo || !nrCadastro || !email) {
    return res.status(400).json({ message: 'Campos obrigatórios não preenchidos.' });
  }

  const sql = `
    INSERT INTO entidades 
    (nome, tipo, razao_social, nrCadastro, email, telefone, data_cadastro, status, log_create, log_update)
    VALUES (?, ?, ?, ?, ?, ?, NOW(), 'A', NOW(), NOW())
  `;

  conexao.query(sql, [nome, tipo, razao_social, nrCadastro, email, telefone], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar entidade:', err);
      return res.status(500).json({ message: 'Erro interno ao cadastrar.' });
    }

    res.status(201).json({ message: 'Entidade cadastrada com sucesso!', id: result.insertId });
  });
});

router.post('/definir-tipo-e-usuario', (req, res) => {
  const { id_entidade, id_tipo, login, senha } = req.body;

  console.log("Recebido:", req.body); // <--- isso ainda é útil para garantir

  if (!id_entidade || !id_tipo || !login || !senha) {
    console.log("Rejeitado por campos vazios.");
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  // DEBUG extra:
  console.log("Iniciando inserções...");

  const sqlEntidadeTipo = 'INSERT INTO entidade_tipo (id_entidade, id_tipo, log_create, log_update) VALUES (?, ?, NOW(), NOW())';
  const sqlUsuario = 'INSERT INTO usuarios (id_entidade, login, senha, log_create, log_update) VALUES (?, ?, ?, NOW(), NOW())';

  conexao.beginTransaction(err => {
    if (err) {
      console.error('Erro ao iniciar transação:', err);
      return res.status(500).json({ message: 'Erro interno.' });
    }

    conexao.query(sqlEntidadeTipo, [id_entidade, id_tipo], (err1) => {
      if (err1) {
        console.error('Erro ao inserir entidade_tipo:', err1); // <-----
        return conexao.rollback(() => {
          res.status(500).json({ message: 'Erro ao definir tipo de entidade.', detalhes: err1.message });
        });
      }

      conexao.query(sqlUsuario, [id_entidade, login, senha], (err2) => {
        if (err2) {
          console.error('Erro ao inserir usuário:', err2); // <-----
          return conexao.rollback(() => {
            res.status(500).json({ message: 'Erro ao criar usuário.', detalhes: err2.message });
          });
        }

        conexao.commit((errCommit) => {
          if (errCommit) {
            console.error('Erro no commit:', errCommit);
            return conexao.rollback(() => {
              res.status(500).json({ message: 'Erro ao finalizar operação.' });
            });
          }

          res.status(201).json({ message: 'Tipo e usuário cadastrados com sucesso.' });
        });
      });
    });
  });
});



module.exports = router;
