-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               8.0.44 - MySQL Community Server - GPL
-- Операционная система:         Linux
-- HeidiSQL Версия:              12.14.0.7165
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Дамп структуры для таблица meteor_test.customers
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `position_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `position_id` (`position_id`),
  CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`position_id`) REFERENCES `positions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Дамп данных таблицы meteor_test.customers: ~3 rows (приблизительно)
INSERT INTO `customers` (`id`, `full_name`, `position_id`) VALUES
	(1, 'Dino Fabrello', 1),
	(2, 'Walter Marangoni', 2),
	(3, 'Angelo Ottogialli', 3);

-- Дамп структуры для таблица meteor_test.positions
CREATE TABLE IF NOT EXISTS `positions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Дамп данных таблицы meteor_test.positions: ~3 rows (приблизительно)
INSERT INTO `positions` (`id`, `name`) VALUES
	(1, 'officer'),
	(2, 'manager'),
	(3, 'operator');

-- Дамп структуры для таблица meteor_test.translations
CREATE TABLE IF NOT EXISTS `translations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `source` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `translated` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Дамп данных таблицы meteor_test.translations: ~3 rows (приблизительно)
INSERT INTO `translations` (`id`, `source`, `translated`) VALUES
	(1, 'officer', 'офицер'),
	(2, 'manager', 'менеджер'),
	(3, 'operator', 'оператор');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
