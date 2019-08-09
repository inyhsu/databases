drop database if exists chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  ID int not null auto_increment,
  username VARCHAR(20) NOT NULL UNIQUE,
  PRIMARY KEY (ID)
);

CREATE TABLE messages (
  /* Describe your table here.*/
    ID INT NOT NULL AUTO_INCREMENT,
    userID INT NOT NULL,
    username VARCHAR(140) NOT NULL,
    roomname VARCHAR(140) NOT NULL,
    message VARCHAR(140) NOT NULL,

    PRIMARY KEY(ID),
    FOREIGN KEY (userID)
        REFERENCES users(ID),
    FOREIGN KEY (username)
        REFERENCES users(username)
);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

