DROP DATABASE IF EXISTS quotes;

CREATE DATABASE quotes;

USE quotes;

CREATE TABLE newQuotes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  input VARCHAR(350) NOT NULL
);

-- mysql -u root -p < ./server/db/schema.sql