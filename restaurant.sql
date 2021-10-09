create database restaurant;
use restaurant; 
CREATE TABLE menu(plato_id int NOT NULL AUTO_INCREMENT, plato_nom varchar(255) NOT NULL, precio DEC(5,2) NOT NULL, created_date datetime, modified_date datetime, PRIMARY KEY (plato_id));
INSERT INTO menu(plato_nom, precio, created_date, modified_date) VALUES ('Locro', 50.37, NOW(), NOW());
INSERT INTO menu(plato_nom, precio, created_date, modified_date) VALUES ('Pure de Papa', 23.50, NOW(), NOW());
INSERT INTO menu(plato_nom, precio, created_date, modified_date) VALUES ('Milanesa', 16.00, NOW(), NOW());
