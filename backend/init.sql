/*
  Initializes database.
  To use, open terminal in this folder and run 'mysql -u root < dbConfig.sql'.
*/

DROP DATABASE IF EXISTS hikingdb;
CREATE DATABASE hikingdb;
USE hikingdb;

CREATE TABLE users (
  id INTEGER AUTO_INCREMENT,
  name VARCHAR(25),
  PRIMARY KEY (id)
);

CREATE TABLE trails (
  id INTEGER AUTO_INCREMENT,
  name TEXT,
  latitude DECIMAL(6,4),  -- Ranges from -90.0000 to +90.0000
  longitude DECIMAL(7,4),  -- Ranges from -180.0000 to +180.0000
  directions TEXT,
  description TEXT,
  url TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE wishlists (
  userId INTEGER,
  trailId INTEGER,
  FOREIGN KEY (userId) REFERENCES users (id),
  FOREIGN KEY (trailId) REFERENCES trails (id)
);

CREATE TABLE completeds (
  rating INTEGER,
  phoneReception INTEGER,
  intensity INTEGER,
  scenic INTEGER,
  userId INTEGER,
  trailId INTEGER,
  FOREIGN KEY (userId) REFERENCES users (id),
  FOREIGN KEY (trailId) REFERENCES trails (id)
);