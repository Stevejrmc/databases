CREATE DATABASE chat;

USE chat;

CREATE TABLE Messages (
  ID INTEGER PRIMARY KEY AUTO_INCREMENT,
  text VARCHAR(255),
  username VARCHAR(255),
  roomname VARCHAR(255),
  timestamp TIMESTAMP
);

CREATE TABLE Users (
ID INTEGER PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(255)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
