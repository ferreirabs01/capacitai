-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.32-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para gen
CREATE DATABASE IF NOT EXISTS `gen` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `gen`;

-- Copiando estrutura para tabela gen.competencias_cursos
CREATE TABLE IF NOT EXISTS `competencias_cursos` (
  `id_competencia` int(11) NOT NULL AUTO_INCREMENT,
  `id_curso` int(11) NOT NULL,
  `descricao` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`descricao`)),
  `log_create` datetime DEFAULT current_timestamp(),
  `log_update` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id_competencia`),
  KEY `id_curso` (`id_curso`),
  CONSTRAINT `competencias_cursos_ibfk_1` FOREIGN KEY (`id_curso`) REFERENCES `cursos` (`id_curso`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela gen.competencias_cursos: ~0 rows (aproximadamente)
DELETE FROM `competencias_cursos`;

-- Copiando estrutura para tabela gen.contatos
CREATE TABLE IF NOT EXISTS `contatos` (
  `id_entidade` int(11) NOT NULL,
  `tipo` char(1) NOT NULL,
  `contato` varchar(50) NOT NULL,
  `log_create` datetime NOT NULL DEFAULT current_timestamp(),
  `log_update` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  KEY `id_entidade` (`id_entidade`),
  CONSTRAINT `contatos_ibfk_1` FOREIGN KEY (`id_entidade`) REFERENCES `entidades` (`id_entidade`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela gen.contatos: ~0 rows (aproximadamente)
DELETE FROM `contatos`;

-- Copiando estrutura para tabela gen.cursos
CREATE TABLE IF NOT EXISTS `cursos` (
  `id_curso` int(11) NOT NULL AUTO_INCREMENT,
  `id_entidade` int(11) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `prazo` int(11) NOT NULL,
  `valor` float NOT NULL,
  `log_create` datetime DEFAULT current_timestamp(),
  `log_update` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id_curso`),
  KEY `id_entidade` (`id_entidade`),
  CONSTRAINT `cursos_ibfk_1` FOREIGN KEY (`id_entidade`) REFERENCES `entidades` (`id_entidade`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela gen.cursos: ~1 rows (aproximadamente)
DELETE FROM `cursos`;
INSERT INTO `cursos` (`id_curso`, `id_entidade`, `descricao`, `prazo`, `valor`, `log_create`, `log_update`) VALUES
	(1, 2, 'Power BI Microsoft ', 32, 0, '2025-06-14 15:22:42', '2025-06-14 15:22:42');

-- Copiando estrutura para tabela gen.entidades
CREATE TABLE IF NOT EXISTS `entidades` (
  `id_entidade` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `tipo` varchar(2) NOT NULL,
  `razao_social` varchar(250) DEFAULT NULL,
  `nrCadastro` varchar(14) NOT NULL,
  `email` varchar(250) NOT NULL,
  `telefone` varchar(11) NOT NULL,
  `data_cadastro` date NOT NULL,
  `status` char(1) NOT NULL,
  `log_create` datetime NOT NULL DEFAULT current_timestamp(),
  `log_update` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id_entidade`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela gen.entidades: ~9 rows (aproximadamente)
DELETE FROM `entidades`;
INSERT INTO `entidades` (`id_entidade`, `nome`, `tipo`, `razao_social`, `nrCadastro`, `email`, `telefone`, `data_cadastro`, `status`, `log_create`, `log_update`) VALUES
	(1, 'BRUNO DE SOUZA FERREIRA', 'PF', NULL, '33355566688', 'ferreirabs@msn.com', '18999996666', '2025-06-14', 'A', '2025-06-14 15:15:58', '2025-06-14 15:15:58'),
	(2, 'SENAI PRESIDENTE PRUDENTE ', 'PJ', 'SENAI SANTO PASCHOAL CREPALDI', '55333666000127', 'teste@tese.com.br', '1832226666', '0000-00-00', '', '2025-06-14 15:21:25', '2025-06-14 15:21:25'),
	(9, 'bruno de souza ferreira', 'PF', 'rerere', '5555555555', 'ferreirabs@msn.com', '18996159173', '2025-06-15', 'A', '2025-06-15 09:42:30', '2025-06-15 09:42:30'),
	(11, 'bruno de souza ferreira', 'PF', '', '35072074862', 'ferreirabs@msn.com', '18996159173', '2025-06-15', 'A', '2025-06-15 09:57:38', '2025-06-15 09:57:38'),
	(12, 'marquesi', 'PF', '', '5115', 'teste@teste', '18615151', '2025-06-15', 'A', '2025-06-15 10:11:33', '2025-06-15 10:11:33'),
	(13, 'bruno de souza ferreira', 'PF', '', '3366699985', 'ferreirabs@msn.com', '18996159173', '2025-06-15', 'A', '2025-06-15 11:03:50', '2025-06-15 11:03:50'),
	(14, 'bia', 'PF', '', '121515151', 'teste@teset', '18181', '2025-06-15', 'A', '2025-06-15 11:55:06', '2025-06-15 11:55:06'),
	(16, 'rafael b', 'PF', '', '66655599988', 'teste@teset', '1815151', '2025-06-15', 'A', '2025-06-15 12:52:58', '2025-06-15 12:52:58'),
	(17, 'kelly', 'PF', '', '3333666655554', 'tetste@gmail.com', '1899181', '2025-06-15', 'A', '2025-06-15 13:33:18', '2025-06-15 13:33:18');

-- Copiando estrutura para tabela gen.entidade_tipo
CREATE TABLE IF NOT EXISTS `entidade_tipo` (
  `id_entidade` int(11) NOT NULL,
  `id_tipo` int(11) NOT NULL,
  `log_create` datetime NOT NULL DEFAULT current_timestamp(),
  `log_update` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id_entidade`,`id_tipo`),
  KEY `id_tipo` (`id_tipo`),
  CONSTRAINT `entidade_tipo_ibfk_1` FOREIGN KEY (`id_entidade`) REFERENCES `entidades` (`id_entidade`) ON DELETE CASCADE,
  CONSTRAINT `entidade_tipo_ibfk_2` FOREIGN KEY (`id_tipo`) REFERENCES `tipo_entidade` (`id_tipo`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela gen.entidade_tipo: ~9 rows (aproximadamente)
DELETE FROM `entidade_tipo`;
INSERT INTO `entidade_tipo` (`id_entidade`, `id_tipo`, `log_create`, `log_update`) VALUES
	(1, 3, '2025-06-14 15:16:15', '2025-06-14 15:16:15'),
	(2, 2, '2025-06-14 15:21:53', '2025-06-14 15:21:53'),
	(9, 1, '2025-06-15 09:42:38', '2025-06-15 09:42:38'),
	(11, 3, '2025-06-15 09:57:48', '2025-06-15 09:57:48'),
	(12, 3, '2025-06-15 10:12:04', '2025-06-15 10:12:04'),
	(13, 3, '2025-06-15 11:04:00', '2025-06-15 11:04:00'),
	(14, 3, '2025-06-15 11:55:18', '2025-06-15 11:55:18'),
	(16, 3, '2025-06-15 12:53:07', '2025-06-15 12:53:07'),
	(17, 3, '2025-06-15 13:33:26', '2025-06-15 13:33:26');

-- Copiando estrutura para tabela gen.perfil_candidato
CREATE TABLE IF NOT EXISTS `perfil_candidato` (
  `id_entidade` int(11) NOT NULL,
  `curriculo` blob DEFAULT NULL,
  `log_create` datetime DEFAULT current_timestamp(),
  `log_update` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `foto` varchar(255) DEFAULT NULL COMMENT 'url para adicionar foto candidato',
  `chaves` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`chaves`)),
  `teste_vocacional` char(1) DEFAULT 'N',
  PRIMARY KEY (`id_entidade`),
  CONSTRAINT `perfil_candidato_ibfk_1` FOREIGN KEY (`id_entidade`) REFERENCES `entidades` (`id_entidade`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela gen.perfil_candidato: ~7 rows (aproximadamente)
DELETE FROM `perfil_candidato`;
INSERT INTO `perfil_candidato` (`id_entidade`, `curriculo`, `log_create`, `log_update`, `foto`, `chaves`, `teste_vocacional`) VALUES
	(1, _binary 0x506f7765722042492c20636f6e7461626569732c206461646f732c206573746174697374696361, '2025-06-14 15:17:32', '2025-06-14 16:32:24', NULL, NULL, NULL),
	(11, _binary 0x696d672f656e7469646164652f637572726963756c6f732f31312f637572726963756c6f2e706466, '2025-06-15 10:21:55', '2025-06-15 12:16:55', NULL, '[]', NULL),
	(12, _binary 0x696d672f656e7469646164652f637572726963756c6f732f31322f637572726963756c6f2e706466, '2025-06-15 10:37:29', '2025-06-15 10:38:24', 'img/entidade/fotos/12/foto.jpg', NULL, NULL),
	(13, _binary 0x696d672f656e7469646164652f637572726963756c6f732f31332f637572726963756c6f2e706466, '2025-06-15 11:07:40', '2025-06-15 13:56:17', NULL, '["2004","2006","2013","2017","2023","ferreirabs","linkedin","other","google","linux","data","with","cloud","instrutor","formação","profissional","presidente","prudente","paulo","brasil"]', 'S'),
	(14, _binary 0x696d672f656e7469646164652f637572726963756c6f732f31342f637572726963756c6f2e706466, '2025-06-15 11:55:50', '2025-06-15 11:55:50', 'img/entidade/fotos/14/foto.jpg', '["2004","2006","2013","2017","2023","ferreirabs","linkedin","other","google","linux","data","with","cloud","instrutor","formação","profissional","presidente","prudente","paulo","brasil"]', NULL),
	(16, _binary 0x696d672f656e7469646164652f637572726963756c6f732f31362f637572726963756c6f2e706466, '2025-06-15 12:53:34', '2025-06-15 12:54:56', NULL, '["2004","2006","2013","2017","2023","ferreirabs","linkedin","other","google","linux","data","with","cloud","instrutor","formação","profissional","presidente","prudente","paulo","brasil"]', 'N'),
	(17, _binary 0x696d672f656e7469646164652f637572726963756c6f732f31372f637572726963756c6f2e706466, '2025-06-15 13:39:09', '2025-06-15 13:43:41', NULL, '["2004","2006","2013","2017","2023","ferreirabs","linkedin","other","google","linux","data","with","cloud","instrutor","formação","profissional","presidente","prudente","paulo","brasil"]', 'S');

-- Copiando estrutura para tabela gen.tipo_entidade
CREATE TABLE IF NOT EXISTS `tipo_entidade` (
  `id_tipo` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(50) NOT NULL,
  `log_create` datetime NOT NULL DEFAULT current_timestamp(),
  `log_update` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id_tipo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela gen.tipo_entidade: ~3 rows (aproximadamente)
DELETE FROM `tipo_entidade`;
INSERT INTO `tipo_entidade` (`id_tipo`, `descricao`, `log_create`, `log_update`) VALUES
	(1, 'Empregador', '2025-06-14 15:11:30', '2025-06-14 15:11:30'),
	(2, 'Inst.Ensino', '2025-06-14 15:11:50', '2025-06-14 15:11:50'),
	(3, 'Trabalhador', '2025-06-14 15:12:00', '2025-06-14 15:12:00');

-- Copiando estrutura para tabela gen.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_entidade` int(11) NOT NULL,
  `login` varchar(50) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `log_create` datetime NOT NULL DEFAULT current_timestamp(),
  `log_update` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  KEY `id_entidade` (`id_entidade`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_entidade`) REFERENCES `entidades` (`id_entidade`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela gen.usuarios: ~3 rows (aproximadamente)
DELETE FROM `usuarios`;
INSERT INTO `usuarios` (`id_entidade`, `login`, `senha`, `log_create`, `log_update`) VALUES
	(1, 'ferreirabs', NULL, '2025-06-14 15:18:07', '2025-06-14 15:18:07'),
	(13, 'bruno', '1', '2025-06-15 11:04:00', '2025-06-15 11:04:00'),
	(17, 'kelly', '1', '2025-06-15 13:33:26', '2025-06-15 13:33:26');

-- Copiando estrutura para tabela gen.vagas_perfil
CREATE TABLE IF NOT EXISTS `vagas_perfil` (
  `id_vaga` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) DEFAULT NULL,
  `competencias` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`competencias`)),
  `log_create` datetime DEFAULT current_timestamp(),
  `log_update` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id_vaga`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela gen.vagas_perfil: ~10 rows (aproximadamente)
DELETE FROM `vagas_perfil`;
INSERT INTO `vagas_perfil` (`id_vaga`, `descricao`, `competencias`, `log_create`, `log_update`) VALUES
	(3, 'Desenvolvedor Front-End', '["HTML", "CSS", "JavaScript", "React"]', '2025-06-15 14:21:35', '2025-06-15 14:21:35'),
	(4, 'Analista de Dados', '["SQL", "Power BI", "Python", "ETL"]', '2025-06-15 14:21:35', '2025-06-15 14:21:35'),
	(5, 'Engenheiro de Software', '["Java", "Spring Boot", "Microservices", "Docker"]', '2025-06-15 14:21:35', '2025-06-15 14:21:35'),
	(6, 'Técnico em Redes', '["TCP/IP", "Roteamento", "Switches", "Firewall"]', '2025-06-15 14:21:35', '2025-06-15 14:21:35'),
	(7, 'Designer UI/UX', '["Figma", "Adobe XD", "Prototipagem", "Wireframes"]', '2025-06-15 14:21:35', '2025-06-15 14:21:35'),
	(8, 'Desenvolvedor Mobile', '["React Native", "Flutter", "Android", "iOS"]', '2025-06-15 14:21:35', '2025-06-15 14:21:35'),
	(9, 'Cientista de Dados', '["Python", "Pandas", "Machine Learning", "Jupyter"]', '2025-06-15 14:21:35', '2025-06-15 14:21:35'),
	(10, 'Administrador de Banco de Dados', '["MySQL", "PostgreSQL", "Backup", "Segurança"]', '2025-06-15 14:21:35', '2025-06-15 14:21:35'),
	(11, 'Especialista em Segurança da Informação', '["Criptografia", "Pentest", "linux", "ISO 27001"]', '2025-06-15 14:21:35', '2025-06-15 14:25:53'),
	(12, 'DevOps Engineer', '["CI/CD", "GitHub Actions", "Kubernetes", "AWS"]', '2025-06-15 14:21:35', '2025-06-15 14:21:35');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
