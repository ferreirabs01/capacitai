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
DROP DATABASE IF EXISTS `gen`;
CREATE DATABASE IF NOT EXISTS `gen` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `gen`;

-- Copiando estrutura para tabela gen.competencias_cursos
DROP TABLE IF EXISTS `competencias_cursos`;
CREATE TABLE IF NOT EXISTS `competencias_cursos` (
  `id_competencia` int(11) NOT NULL AUTO_INCREMENT,
  `id_curso` int(11) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `log_create` datetime DEFAULT current_timestamp(),
  `log_update` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id_competencia`),
  KEY `id_curso` (`id_curso`),
  CONSTRAINT `competencias_cursos_ibfk_1` FOREIGN KEY (`id_curso`) REFERENCES `cursos` (`id_curso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela gen.competencias_cursos: ~0 rows (aproximadamente)
DELETE FROM `competencias_cursos`;

-- Copiando estrutura para tabela gen.contatos
DROP TABLE IF EXISTS `contatos`;
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
DROP TABLE IF EXISTS `cursos`;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela gen.cursos: ~0 rows (aproximadamente)
DELETE FROM `cursos`;

-- Copiando estrutura para tabela gen.entidades
DROP TABLE IF EXISTS `entidades`;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela gen.entidades: ~0 rows (aproximadamente)
DELETE FROM `entidades`;

-- Copiando estrutura para tabela gen.entidade_tipo
DROP TABLE IF EXISTS `entidade_tipo`;
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

-- Copiando dados para a tabela gen.entidade_tipo: ~0 rows (aproximadamente)
DELETE FROM `entidade_tipo`;

-- Copiando estrutura para tabela gen.perfil_candidato
DROP TABLE IF EXISTS `perfil_candidato`;
CREATE TABLE IF NOT EXISTS `perfil_candidato` (
  `id_entidade` int(11) NOT NULL,
  `curriculo` blob DEFAULT NULL,
  `log_create` datetime DEFAULT current_timestamp(),
  `log_update` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id_entidade`),
  CONSTRAINT `perfil_candidato_ibfk_1` FOREIGN KEY (`id_entidade`) REFERENCES `entidades` (`id_entidade`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela gen.perfil_candidato: ~0 rows (aproximadamente)
DELETE FROM `perfil_candidato`;

-- Copiando estrutura para tabela gen.tipo_entidade
DROP TABLE IF EXISTS `tipo_entidade`;
CREATE TABLE IF NOT EXISTS `tipo_entidade` (
  `id_tipo` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(50) NOT NULL,
  `log_create` datetime NOT NULL DEFAULT current_timestamp(),
  `log_update` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id_tipo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela gen.tipo_entidade: ~0 rows (aproximadamente)
DELETE FROM `tipo_entidade`;

-- Copiando estrutura para tabela gen.usuarios
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_entidade` int(11) NOT NULL,
  `login` varchar(50) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `log_create` datetime NOT NULL DEFAULT current_timestamp(),
  `log_update` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  KEY `id_entidade` (`id_entidade`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_entidade`) REFERENCES `entidades` (`id_entidade`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela gen.usuarios: ~0 rows (aproximadamente)
DELETE FROM `usuarios`;

-- Copiando estrutura para tabela gen.vagas_perfil
DROP TABLE IF EXISTS `vagas_perfil`;
CREATE TABLE IF NOT EXISTS `vagas_perfil` (
  `id_vaga` int(11) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `competencias` blob DEFAULT NULL,
  `log_create` datetime DEFAULT current_timestamp(),
  `log_update` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id_vaga`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela gen.vagas_perfil: ~0 rows (aproximadamente)
DELETE FROM `vagas_perfil`;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
