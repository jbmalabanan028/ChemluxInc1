CREATE DATABASE contact_form_db;

USE contact_form_db;

CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO contact_messages (name, email, message) VALUES ('John Doe', 'john@example.com', 'This is a test message.');

SELECT * FROM contact_messages;
