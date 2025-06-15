const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const pdfParse = require('pdf-parse');

const multer = require('multer');
const conexao = require('../db');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', upload.fields([
  { name: 'curriculo', maxCount: 1 },
  { name: 'foto', maxCount: 1 }
]), async (req, res) => {
  const id_entidade = req.body.id_entidade;

  if (!id_entidade) {
    return res.status(400).json({ message: 'ID da entidade é obrigatório.' });
  }

  const arquivosSalvos = {};

  // Processar currículo (PDF)
  let palavrasChaves = null;
  if (req.files.curriculo) {
  const bufferPDF = req.files.curriculo[0].buffer;

  const dirCurriculo = path.join(__dirname, `../../frontend/img/entidade/curriculos/${id_entidade}`);
  const caminhoCurriculo = path.join(dirCurriculo, 'curriculo.pdf');

  fs.mkdirSync(dirCurriculo, { recursive: true });
  fs.writeFileSync(caminhoCurriculo, bufferPDF);

  arquivosSalvos.curriculo = `img/entidade/curriculos/${id_entidade}/curriculo.pdf`;

  // OCR: Ler texto do PDF e extrair palavras-chave
  try {
    const data = await pdfParse(bufferPDF);
    const textoLimpo = data.text
      .replace(/[^a-zA-ZÀ-ÿ0-9\s]/g, ' ')
      .toLowerCase()
      .split(/\s+/)
      .filter(p => p.length > 3); // palavras com mais de 3 letras

    // Contar e filtrar palavras frequentes
    const freq = {};
    textoLimpo.forEach(p => freq[p] = (freq[p] || 0) + 1);

    palavrasChaves = Object.keys(freq)
      .filter(k => freq[k] > 1)
      .slice(0, 20); // Pega até 20 palavras relevantes
  } catch (err) {
    console.warn('Erro ao ler conteúdo do PDF:', err.message);
  }
}

  // Processar foto (JPG ou PNG)
  if (req.files.foto) {
    const dirFoto = path.join(__dirname, `../../frontend/img/entidade/fotos/${id_entidade}`);
    const caminhoFoto = path.join(dirFoto, 'foto.jpg');

    fs.mkdirSync(dirFoto, { recursive: true });
    fs.writeFileSync(caminhoFoto, req.files.foto[0].buffer);

    arquivosSalvos.foto = `img/entidade/fotos/${id_entidade}/foto.jpg`;
  }

  // Atualizar o banco
const sql = `
  INSERT INTO perfil_candidato (id_entidade, curriculo, foto, chaves, log_create, log_update)
  VALUES (?, ?, ?, ?, NOW(), NOW())
  ON DUPLICATE KEY UPDATE
    curriculo = VALUES(curriculo),
    foto = VALUES(foto),
    chaves = VALUES(chaves),
    log_update = NOW()
`;


conexao.query(
  sql,
  [id_entidade, arquivosSalvos.curriculo || null, arquivosSalvos.foto || null, palavrasChaves ? JSON.stringify(palavrasChaves) : null],
  (err) => {
    if (err) {
      console.error('Erro ao atualizar banco:', err);
      return res.status(500).json({ message: 'Erro ao atualizar o banco de dados.' });
    }

    res.status(200).json({ message: 'Arquivos enviados com sucesso.', ...arquivosSalvos });
  }
);

}); 


module.exports = router;
