CREATE DATABASE users_db_api;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(180) UNIQUE NOT NULL,
    name VARCHAR(256) NOT NULL,
    password VARCHAR(180) NOT NULL
);

ALTER TABLE
    users RENAME password TO password_hash;