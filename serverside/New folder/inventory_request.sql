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
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uid` varchar(255) NOT NULL,
  `staffId` varchar(255) NOT NULL,
  `staffName` varchar(255) NOT NULL,
  `itemName` varchar(255) NOT NULL,
  `requestAt` varchar(255) NOT NULL,
  `approved` varchar(255) DEFAULT NULL,
  `reject` varchar(255) DEFAULT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `request_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request`
--

LOCK TABLES `request` WRITE;
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
INSERT INTO `request` VALUES (1,'47594918-c399-433e-a47a-246e7a80c055','2022','John Doe','Pencil','2022-10-06','Approved','Decline',2,'2022-10-06 08:11:19','2022-10-07 21:18:09'),(2,'8038a692-aab7-4258-a5f8-10468ffc9321','15818','Musa Turay','Charger','2019-12-11','Approved',NULL,2,'2022-10-06 08:14:56','2022-10-07 15:16:49'),(3,'646e380d-a421-4c06-8b81-9ed48d5585dd','202345','Musa Turay','Mouse','2029-12-12','decline','No',2,'2022-10-06 09:10:20','2022-10-06 12:48:12'),(4,'6b3a821f-b1f0-473a-8c10-8ab010351f79','20221','Malike Kabba','Blue white','2022-12-19','decline',NULL,4,'2022-10-06 11:00:49','2022-10-06 20:06:45'),(5,'e541dcc0-baad-4c1b-af39-121906482833','456POE90','Junior Smith','lunch','2022-10-06','decline','Rejected',2,'2022-10-06 11:50:39','2022-10-06 12:46:59'),(6,'71b79a0e-f36a-4f1a-9828-25d2dc5fcf09','20223TRUBBN','Manchester United','Desktop Computer','2022-10-06','decline',NULL,6,'2022-10-06 12:51:20','2022-10-06 13:57:56'),(7,'9bc8eaa2-e988-4513-a4e1-1d5e666f4b21','20396','User @ Use','werigdhvank','2019-11-12','Approved',NULL,6,'2022-10-06 13:27:18','2022-10-06 16:01:02'),(8,'eb7fedb4-9988-4bd7-a06f-e38975c1ffae','qwertyuiop','Manager @ Manage','iuygkjh h;lkgjc','2222-12-12','Approved',NULL,7,'2022-10-06 18:21:46','2022-10-06 18:22:03'),(10,'65d3fd78-3fc9-4509-ac16-b258c8cd3eb1','1qazxsw23edc','Orange Sierra Leon','pencil','2020-08-09','Approved','Decline',4,'2022-10-07 10:06:37','2022-10-07 13:18:28'),(11,'65fe4d20-4901-49e5-a3fd-b9d6d73708bf','16890','Orange Sierra Leon','wertetryeti','2012-12-12','Approved','Decline',4,'2022-10-07 13:23:33','2022-10-07 13:29:45');
/*!40000 ALTER TABLE `request` ENABLE KEYS */;
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
