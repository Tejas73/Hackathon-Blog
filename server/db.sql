DROP DATABASE IF EXISTS blog_app_db;
create database blog_app_db;
use blog_app_db;

-- users table
CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(30),
    password VARCHAR(20),
    phone_no VARCHAR(10),
    created_time DATE
);

-- blogs table
CREATE TABLE blogs(
    bid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(20),
    contents VARCHAR(30),
    created_time DATE,
    user_id INT, 
    category_id INT
);

-- categories table
CREATE TABLE categories(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50),
    description_c VARCHAR(50)
);