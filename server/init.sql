CREATE DATABASE IF NOT EXISTS hippero_db;
USE hippero_db;

CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    xp INT DEFAULT 0,
    level INT DEFAULT 0,
    currency INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS tasks(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(50) NOT NULL,
    description TEXT,
    priority ENUM("Low", "Medium", "High"),
    difficulty ENUM("Easy", "Normal", "Difficult"),
    status ENUM("Pending", "In Progress", "Completed"),
    due_date DATETIME,
    recurring_interval ENUM("Daily", "Weekly", "Monthly"),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
