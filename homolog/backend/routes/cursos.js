const express = require('express');
const router = express.Router();
const conexao = require('../db'); // caminho do seu arquivo de conexão

// Buscar cursos por competência (sem uso de Promises)
router.get('/por-competencia', (req, res) => {
  const competencia = req.query.c;

  if (!competencia) {
    return res.status(400).json({ erro: 'Competência não informada' });
  }

const sql = `
  SELECT 
    c.id_curso,
    c.descricao,
    c.prazo,
    c.valor,
    c.saiba_mais,
    e.nome AS instituicao,
    e.telefone
  FROM cursos c
  JOIN competencias_cursos cc ON cc.id_curso = c.id_curso
  JOIN entidades e ON c.id_entidade = e.id_entidade
  WHERE cc.descricao LIKE ?
`;
const termo = `%"${competencia.toLowerCase()}"%`;

  conexao.query(sql, [termo], (erro, resultados) => {
    if (erro) {
      console.error('Erro ao buscar cursos por competência:', erro);
      return res.status(500).json({ erro: 'Erro interno ao buscar cursos' });
    }

    res.json(resultados);
  });
});

module.exports = router;
