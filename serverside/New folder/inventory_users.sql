-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: inventory
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uid` varchar(255) NOT NULL,
  `staffId` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'eed5ccc7-777a-4f24-a78b-20ce5c7bf838','15818Turay','Nfa Turay','info@turaymusa.com','$argon2id$v=19$m=4096,t=3,p=1$wIKqufCZB3/2Dz/1DAkhdg$O/ouNIS2E1p2p2oN8PMxM/tnHm9H3zvxS65MeAntBss','admin','2022-10-05 20:43:55','2022-10-05 20:43:55'),(4,'e508d07f-1cec-4fc3-9fa3-844fc219dae0','2022ORANGE','Orange Sierra Leone','orange@orange.com','$argon2id$v=19$m=4096,t=3,p=1$cBP2jm1ObLRkVFvxxtidzA$uJC9L6ghx69zZjtVedoO3cebUvrYAnT9yrnkTWYV5yw','user','2022-10-05 22:50:41','2022-10-07 09:30:41'),(6,'43232e4d-401c-42b6-9e97-60c8196e37dd','15818','User @ User','user@gmail.com','$argon2id$v=19$m=4096,t=3,p=1$VkMZoJWS35jqhRlekWHITA$Znaq+OPW4fWnh8cWHYFOtZA1zm4CpGB811wtDdoo4ko','user','2022-10-06 11:25:06','2022-10-07 09:28:45'),(7,'5a8b1a46-57be-4e55-8935-741100e7a5f4','2022MANAGER','Manager @ Manager','manager@gmail.com','$argon2id$v=19$m=4096,t=3,p=1$SkyNVdfi65qOLQhdW6HEXQ$sblbkPaF47V6nkH9ZZuXFKCqE2vh8MhxF5QDPmaH9gc','manager','2022-10-06 11:25:47','2022-10-06 11:25:47'),(8,'11a10f53-afbb-454f-ab8d-6f5768b8f81a','2021DIRECTOR','Director @ Director','director@gmail.com','$argon2id$v=19$m=4096,t=3,p=1$r5UtOSGm5B3EUDaii9HoPQ$wdPmiLQcO92n1wHkHL1Lq91RymXMYRKaDwg7fLKVHS0','director','2022-10-06 11:26:37','2022-10-06 11:26:37');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-08  6:45:43
